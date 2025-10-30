import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Tarocco LO STRULLO */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background con Tarocco "LO STRULLO" */}
        <div className="absolute inset-0 bg-tarot-yellow/20">
          {/* Immagine del Tarocco come sfondo */}
          <img 
            src="/tarot-lo-strullo.jpg" 
            alt="Il Tarocco dello Strullo" 
            className="absolute inset-0 w-full h-full object-cover opacity-15 blur-sm"
            onError={(e) => {
              // Fallback pattern se l'immagine non è caricata
              const target = e.currentTarget as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          {/* Pattern decorativo medievale */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik00MCAyMGM1LjUyMyAwIDEwIDQuNDc3IDEwIDEwcy00LjQ3NyAxMC0xMCAxMC0xMC00LjQ3Ny0xMC0xMCA0LjQ3Ny0xMCAxMC0xMHptMCAzYy0zLjg2NiAwLTcgMy4xMzQtNyA3czMuMTM0IDcgNyA3IDctMy4xMzQgNy03LTMuMTM0LTctNy03eiIgZmlsbD0iI2Q0YTk1OSIgb3BhY2l0eT0iLjMiLz48L2c+PC9zdmc+')] bg-repeat"></div>
          </div>
        </div>

        {/* Hero Overlay - più leggero per mostrare i colori del tarocco */}
        <div className="hero-overlay absolute inset-0" />

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* Numero del tarocco */}
          <div className="inline-block mb-6 px-6 py-2 border-3 border-tarot-gold rounded-full bg-tarot-cream">
            <span className="font-serif text-3xl font-bold text-tarot-dark">0</span>
          </div>
          
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-tarot-gold mb-6 drop-shadow-2xl tracking-wide" style={{ fontWeight: 900 }}>
            STRULLO
          </h1>
          <p className="font-serif text-2xl md:text-3xl text-tarot-yellow mb-4">
            Associazione Culturale
          </p>
          
          {/* Linea decorativa */}
          <div className="decorative-line w-32 mx-auto my-8"></div>
          
          <p className="text-lg md:text-xl text-tarot-cream/90 max-w-2xl mx-auto mb-4 leading-relaxed">
            <em className="font-serif text-tarot-yellow">Il giovane folle del sole:</em> libero, curioso e ribelle.
          </p>
          <p className="text-base md:text-lg text-tarot-cream/80 max-w-2xl mx-auto mb-12">
            Cammina senza meta, ma con la luce negli occhi — simbolo di chi segue il proprio istinto 
            e trasforma l'imprevisto in arte.
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
      <section className="py-20 bg-tarot-dark/50 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-tarot-gold mb-4">
              La Nostra Missione
            </h2>
            <div className="decorative-line w-24 mx-auto my-8"></div>
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

      {/* Features Grid - Stile Tarocchi */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card Eventi - con bordi decorativi */}
            <div className="text-center p-8 tarot-border bg-tarot-dark/40 rounded-sm tarot-card-hover backdrop-blur-sm">
              <div className="w-20 h-20 mx-auto mb-6 relative">
                {/* Illustrazione testa decorativa */}
                <img 
                  src="/illustrations/head-1.png" 
                  alt="Eventi" 
                  className="w-full h-full object-contain brightness-0 invert opacity-80"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full bg-tarot-gold/20 border-2 border-tarot-gold rounded-sm items-center justify-center">
                  <span className="text-tarot-gold text-3xl">✦</span>
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-tarot-gold mb-4">Eventi</h3>
              <div className="decorative-line w-16 mx-auto my-4"></div>
              <p className="text-tarot-cream/80 leading-relaxed">
                Workshop, conferenze e performance che esplorano temi artistici e spirituali
              </p>
            </div>

            {/* Card Community */}
            <div className="text-center p-8 tarot-border bg-tarot-dark/40 rounded-sm tarot-card-hover backdrop-blur-sm">
              <div className="w-20 h-20 mx-auto mb-6 relative">
                <img 
                  src="/illustrations/head-2.png" 
                  alt="Community" 
                  className="w-full h-full object-contain brightness-0 invert opacity-80"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full bg-tarot-gold/20 border-2 border-tarot-gold rounded-sm items-center justify-center">
                  <span className="text-tarot-gold text-3xl">✧</span>
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-tarot-gold mb-4">Community</h3>
              <div className="decorative-line w-16 mx-auto my-4"></div>
              <p className="text-tarot-cream/80 leading-relaxed">
                Una rete di creativi che condividono passioni e progetti comuni
              </p>
            </div>

            {/* Card Arte */}
            <div className="text-center p-8 tarot-border bg-tarot-dark/40 rounded-sm tarot-card-hover backdrop-blur-sm">
              <div className="w-20 h-20 mx-auto mb-6 relative">
                <img 
                  src="/illustrations/head-3.png" 
                  alt="Arte" 
                  className="w-full h-full object-contain brightness-0 invert opacity-80"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full bg-tarot-gold/20 border-2 border-tarot-gold rounded-sm items-center justify-center">
                  <span className="text-tarot-gold text-3xl">✹</span>
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-tarot-gold mb-4">Arte</h3>
              <div className="decorative-line w-16 mx-auto my-4"></div>
              <p className="text-tarot-cream/80 leading-relaxed">
                Esposizioni e gallerie che celebrano l'espressione artistica in tutte le sue forme
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
