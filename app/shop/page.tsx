"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/utils"
import { ShoppingBag } from "lucide-react"

interface Product {
  id: string
  name: string
  description: string | null
  images: string[]
  price: {
    id: string
    amount: number
    currency: string
  }
}

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
  const [checkoutLoading, setCheckoutLoading] = useState<string | null>(null)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products")
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Errore nel caricamento dei prodotti")
      }

      setProducts(data.products)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handlePurchase = async (priceId: string, productId: string) => {
    setCheckoutLoading(productId)
    try {
      const response = await fetch("/api/checkout/shop", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceId }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Errore durante il checkout")
      }

      // Reindirizza a Stripe Checkout
      if (data.url) {
        window.location.href = data.url
      }
    } catch (err: any) {
      alert(err.message || "Si è verificato un errore")
      setCheckoutLoading(null)
    }
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-tarot-gold mb-4 text-center">
          Shop
        </h1>
        <p className="text-center text-tarot-cream/80 mb-12 text-lg">
          Scopri i nostri prodotti esclusivi
        </p>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center text-tarot-cream/80 py-20">
            <p>Caricamento prodotti...</p>
          </div>
        )}

        {/* Error State */}
        {error && !isLoading && (
          <div className="text-center py-20">
            <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-6 rounded-lg inline-block">
              <p>{error}</p>
              <button
                onClick={fetchProducts}
                className="mt-4 text-tarot-gold hover:underline"
              >
                Riprova
              </button>
            </div>
          </div>
        )}

        {/* Products Grid */}
        {!isLoading && !error && products.length === 0 && (
          <div className="text-center text-tarot-cream/80 py-20">
            <ShoppingBag className="mx-auto mb-4 text-tarot-gold/50" size={64} />
            <p className="text-xl">Nessun prodotto disponibile al momento</p>
            <p className="mt-2 text-sm text-tarot-cream/60">
              Torna presto per scoprire le nostre novità
            </p>
          </div>
        )}

        {!isLoading && !error && products.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="flex flex-col tarot-card-hover">
                {/* Product Image */}
                <div className="aspect-square overflow-hidden rounded-t-lg bg-tarot-gold/10">
                  {product.images && product.images.length > 0 ? (
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <ShoppingBag className="text-tarot-gold/50" size={64} />
                    </div>
                  )}
                </div>

                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                  {product.description && (
                    <CardDescription>{product.description}</CardDescription>
                  )}
                </CardHeader>

                <CardContent className="flex-grow">
                  <p className="text-3xl font-serif font-bold text-tarot-gold">
                    {formatPrice(product.price.amount)}
                  </p>
                </CardContent>

                <CardFooter>
                  <Button
                    className="w-full"
                    size="lg"
                    onClick={() => handlePurchase(product.price.id, product.id)}
                    disabled={checkoutLoading === product.id}
                  >
                    {checkoutLoading === product.id ? "Caricamento..." : "Acquista"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        {/* Info Box */}
        <div className="mt-16 bg-tarot-gold/5 border border-tarot-gold/20 rounded-lg p-8">
          <h3 className="font-serif text-2xl font-bold text-tarot-gold mb-4">
            Informazioni sugli acquisti
          </h3>
          <div className="space-y-3 text-tarot-cream/80">
            <p>
              Tutti i pagamenti sono gestiti in modo sicuro tramite Stripe. Accettiamo carte di credito, 
              Apple Pay e Google Pay.
            </p>
            <p>
              La spedizione è disponibile in Italia e in alcuni paesi europei. I costi di spedizione 
              verranno calcolati al checkout.
            </p>
            <p>
              Per qualsiasi domanda sui prodotti o sulla spedizione, contattaci all'indirizzo{" "}
              <a href="mailto:shop@strullo.it" className="text-tarot-gold hover:underline">
                shop@strullo.it
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

