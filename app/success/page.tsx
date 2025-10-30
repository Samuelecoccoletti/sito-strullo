import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function SuccessPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <CheckCircle2 className="mx-auto text-tarot-gold" size={80} />
        </div>

        <h1 className="font-serif text-5xl md:text-6xl font-bold text-tarot-gold mb-6">
          Grazie!
        </h1>

        <div className="space-y-4 text-tarot-cream/90 text-lg mb-12">
          <p>
            Il tuo pagamento è stato completato con successo.
          </p>
          <p>
            Riceverai una email di conferma con tutti i dettagli entro pochi minuti.
          </p>
          <p className="text-tarot-gold font-semibold">
            Benvenuto nella comunità STRULLO!
          </p>
        </div>

        <div className="bg-tarot-gold/5 border border-tarot-gold/20 rounded-lg p-8 mb-12">
          <h2 className="font-serif text-2xl font-bold text-tarot-gold mb-4">
            Prossimi Passi
          </h2>
          <ul className="text-left space-y-3 text-tarot-cream/80">
            <li className="flex items-start gap-3">
              <span className="text-tarot-gold mt-1">✦</span>
              <span>Controlla la tua email per la conferma e i dettagli dell'iscrizione</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-tarot-gold mt-1">✦</span>
              <span>Se hai acquistato prodotti dallo shop, riceverai un'email separata con le informazioni sulla spedizione</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-tarot-gold mt-1">✦</span>
              <span>Esplora i nostri eventi e iscriviti alla newsletter per rimanere aggiornato</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg" variant="default">
              Torna alla Home
            </Button>
          </Link>
          <Link href="/news">
            <Button size="lg" variant="outline">
              Scopri gli Eventi
            </Button>
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-tarot-gold/20">
          <p className="text-tarot-cream/60 text-sm">
            Hai domande? Contattaci all'indirizzo{" "}
            <a href="mailto:info@strullo.it" className="text-tarot-gold hover:underline">
              info@strullo.it
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

