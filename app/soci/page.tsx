"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SociPage() {
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    amount: "10",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      // Converti l'importo in centesimi
      const amountInCents = Math.round(parseFloat(formData.amount) * 100)

      if (amountInCents < 1000) {
        setError("L'importo minimo è €10")
        setIsLoading(false)
        return
      }

      const response = await fetch("/api/checkout/membership", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: formData.nome,
          cognome: formData.cognome,
          email: formData.email,
          amount: amountInCents,
        }),
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
      setError(err.message || "Si è verificato un errore")
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-tarot-gold mb-8 text-center">
          Diventa Socio
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Info Section */}
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold text-tarot-gold">
              Perché diventare socio?
            </h2>
            <div className="space-y-4 text-tarot-cream/90">
              <p className="text-lg">
                Diventare socio di STRULLO significa entrare a far parte di una comunità 
                vibrante di artisti, pensatori e creativi che condividono la passione 
                per l'arte e la cultura.
              </p>
              <div className="space-y-3">
                <h3 className="font-serif text-xl font-semibold text-tarot-gold">
                  Benefici della membership:
                </h3>
                <ul className="list-disc list-inside space-y-2 text-tarot-cream/80">
                  <li>Accesso prioritario a tutti gli eventi STRULLO</li>
                  <li>Sconti esclusivi sugli workshop e sui prodotti dello shop</li>
                  <li>Newsletter mensile con contenuti riservati</li>
                  <li>Possibilità di proporre e organizzare eventi</li>
                  <li>Diritto di voto nelle decisioni dell'associazione</li>
                  <li>Tessera socio personalizzata</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Iscrizione Socio</CardTitle>
                <CardDescription>
                  Compila il form per procedere con l'iscrizione
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-tarot-cream mb-2">
                      Nome *
                    </label>
                    <Input
                      id="nome"
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      placeholder="Mario"
                    />
                  </div>

                  <div>
                    <label htmlFor="cognome" className="block text-sm font-medium text-tarot-cream mb-2">
                      Cognome *
                    </label>
                    <Input
                      id="cognome"
                      type="text"
                      required
                      value={formData.cognome}
                      onChange={(e) => setFormData({ ...formData, cognome: e.target.value })}
                      placeholder="Rossi"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-tarot-cream mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="mario.rossi@esempio.it"
                    />
                  </div>

                  <div>
                    <label htmlFor="amount" className="block text-sm font-medium text-tarot-cream mb-2">
                      Importo (€) *
                    </label>
                    <Input
                      id="amount"
                      type="number"
                      min="10"
                      step="1"
                      required
                      value={formData.amount}
                      onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                      placeholder="10"
                    />
                    <p className="text-xs text-tarot-cream/60 mt-1">
                      Quota minima: €10. Puoi scegliere di contribuire con un importo maggiore.
                    </p>
                  </div>

                  {error && (
                    <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-3 rounded-md text-sm">
                      {error}
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={isLoading}
                  >
                    {isLoading ? "Caricamento..." : "Procedi al pagamento"}
                  </Button>

                  <p className="text-xs text-tarot-cream/60 text-center">
                    Pagamento sicuro tramite Stripe. Accettiamo carte di credito, Apple Pay e Google Pay.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-tarot-gold/5 border border-tarot-gold/20 rounded-lg p-8">
          <h3 className="font-serif text-2xl font-bold text-tarot-gold mb-4">
            Informazioni sulla tessera socio
          </h3>
          <div className="space-y-3 text-tarot-cream/80">
            <p>
              La tessera socio ha validità annuale e va rinnovata ogni anno. 
              Una volta completato il pagamento, riceverai una email di conferma con tutti i dettagli.
            </p>
            <p>
              Per qualsiasi domanda o informazione, non esitare a contattarci all'indirizzo{" "}
              <a href="mailto:info@strullo.it" className="text-tarot-gold hover:underline">
                info@strullo.it
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

