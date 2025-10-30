import Link from "next/link"
import { Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-tarot-gold/20 bg-tarot-dark">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-tarot-gold mb-4">
              STRULLO
            </h3>
            <p className="text-tarot-cream/80 text-sm">
              Associazione Culturale dedicata all'arte e alla cultura contemporanea
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-tarot-gold mb-4">
              Link Utili
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/chi-siamo"
                  className="text-tarot-cream/80 hover:text-tarot-gold transition-colors text-sm"
                >
                  Chi siamo
                </Link>
              </li>
              <li>
                <Link
                  href="/soci"
                  className="text-tarot-cream/80 hover:text-tarot-gold transition-colors text-sm"
                >
                  Diventa socio
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-tarot-cream/80 hover:text-tarot-gold transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-tarot-gold mb-4">
              Contatti
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:info@strullo.it"
                className="flex items-center space-x-2 text-tarot-cream/80 hover:text-tarot-gold transition-colors text-sm"
              >
                <Mail size={18} />
                <span>info@strullo.it</span>
              </a>
              <a
                href="https://instagram.com/strullo.associazione"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-tarot-cream/80 hover:text-tarot-gold transition-colors text-sm"
              >
                <Instagram size={18} />
                <span>@strullo.associazione</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-tarot-gold/20 text-center text-tarot-cream/60 text-sm">
          <p>&copy; {new Date().getFullYear()} STRULLO Associazione Culturale. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  )
}

