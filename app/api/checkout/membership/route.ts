import { NextRequest, NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nome, cognome, email, amount } = body

    // Validazione
    if (!nome || !cognome || !email || !amount) {
      return NextResponse.json(
        { error: "Tutti i campi sono obbligatori" },
        { status: 400 }
      )
    }

    // Amount deve essere almeno 10€ (1000 centesimi)
    if (amount < 1000) {
      return NextResponse.json(
        { error: "L'importo minimo è €10" },
        { status: 400 }
      )
    }

    // Crea Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "Iscrizione Socio STRULLO",
              description: `Iscrizione per ${nome} ${cognome}`,
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/soci`,
      customer_email: email,
      metadata: {
        nome,
        cognome,
        email,
        type: "membership",
      },
    })

    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error: any) {
    console.error("Errore Stripe Checkout:", error)
    return NextResponse.json(
      { error: "Errore durante la creazione della sessione di pagamento" },
      { status: 500 }
    )
  }
}

