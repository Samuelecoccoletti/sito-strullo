import { NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"

export async function GET() {
  try {
    // Recupera tutti i prodotti attivi da Stripe
    const products = await stripe.products.list({
      active: true,
      expand: ["data.default_price"],
    })

    // Filtra e formatta i prodotti
    const formattedProducts = products.data.map((product) => {
      const price = product.default_price as any
      
      return {
        id: product.id,
        name: product.name,
        description: product.description,
        images: product.images,
        price: price ? {
          id: price.id,
          amount: price.unit_amount,
          currency: price.currency,
        } : null,
      }
    }).filter(product => product.price !== null)

    return NextResponse.json({ products: formattedProducts })
  } catch (error: any) {
    console.error("Errore recupero prodotti Stripe:", error)
    return NextResponse.json(
      { error: "Errore durante il recupero dei prodotti" },
      { status: 500 }
    )
  }
}

