import { NextRequest, NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { priceId } = body

    if (!priceId) {
      return NextResponse.json(
        { error: "Price ID è obbligatorio" },
        { status: 400 }
      )
    }

    // Crea Stripe Checkout Session per prodotto shop
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/shop`,
      shipping_address_collection: {
        allowed_countries: ["IT", "FR", "DE", "ES", "AT", "CH"],
      },
    })

    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error: any) {
    console.error("Errore Stripe Checkout Shop:", error)
    return NextResponse.json(
      { error: "Errore durante la creazione della sessione di pagamento" },
      { status: 500 }
    )
  }
}

