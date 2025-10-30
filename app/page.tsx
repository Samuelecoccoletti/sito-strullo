import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image Placeholder */}
        {/* TODO: SOSTITUIRE CON IMMAGINE TAROCCHI */}
        <div className="absolute inset-0 bg-gradient-to-br from-tarot-dark via-tarot-dark/95 to-tarot-dark/90">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAyYy0yLjIxIDAtNCAMS43OS00IDRzMS43OSA0IDQgNCA0LTEuNzkgNC00LTEuNzktNC00LTR6IiBmaWxsPSIjZDRhZjM3IiBvcGFjaXR5PSIuMiIvPjwvZz48L3N2Zz4=')] bg-repeat"></div>
          </div>
        </div>

        {/* Hero Overlay */}
        <div className="hero-overlay absolute inset-0" />

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-tarot-gold mb-6 drop-shadow-2xl">
            STRULLO
          </h1>
          <p className="font-serif text-2xl md:text-3xl text-tarot-cream mb-4">
            Associazione Culturale
          </p>
          <p className="text-lg md:text-xl text-tarot-cream/80 max-w-2xl mx-auto mb-12">
            Un collettivo dedicato all'esplorazione dell'arte, della cultura e della spiritualità contemporanea.
            Dove tradizione e innovazione si incontrano.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/chi-siamo">
              <Button size="lg" variant="default">
                Chi siamo
              </Button>
            </Link>
            <Link href="/soci">
              <Button size="lg" variant="outline">
                Diventa socio
              </Button>
            </Link>
            <Link href="/shop">
              <Button size="lg" variant="outline">
                Shop
              </Button>
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-tarot-dark to-transparent" />
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 bg-tarot-dark/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-tarot-gold mb-8">
              La Nostra Missione
            </h2>
            <div className="space-y-6 text-tarot-cream/90 text-lg leading-relaxed">
              <p>
                STRULLO è più di un'associazione: è un punto di incontro per artisti, pensatori e 
                appassionati che cercano di esplorare i confini tra arte, cultura e misticismo.
              </p>
              <p>
                Attraverso eventi, workshop ed esposizioni, creiamo spazi dove la creatività 
                può fiorire e dove le persone possono connettersi con tradizioni antiche 
                reinterpretate in chiave contemporanea.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 border border-tarot-gold/20 rounded-lg tarot-card-hover">
              <div className="w-16 h-16 bg-tarot-gold/20 border-2 border-tarot-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                {/* TODO: Inserire icona o simbolo tarocchi */}
                <span className="text-tarot-gold text-2xl">✦</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-tarot-gold mb-4">Eventi</h3>
              <p className="text-tarot-cream/80">
                Workshop, conferenze e performance che esplorano temi artistici e spirituali
              </p>
            </div>

            <div className="text-center p-8 border border-tarot-gold/20 rounded-lg tarot-card-hover">
              <div className="w-16 h-16 bg-tarot-gold/20 border-2 border-tarot-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-tarot-gold text-2xl">✧</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-tarot-gold mb-4">Community</h3>
              <p className="text-tarot-cream/80">
                Una rete di creativi che condividono passioni e progetti comuni
              </p>
            </div>

            <div className="text-center p-8 border border-tarot-gold/20 rounded-lg tarot-card-hover">
              <div className="w-16 h-16 bg-tarot-gold/20 border-2 border-tarot-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-tarot-gold text-2xl">✹</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-tarot-gold mb-4">Arte</h3>
              <p className="text-tarot-cream/80">
                Esposizioni e gallerie che celebrano l'espressione artistica in tutte le sue forme
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

