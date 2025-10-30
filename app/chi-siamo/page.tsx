<<<<<<< HEAD
"use client"

=======
>>>>>>> 6265e559eb01950f09674cb85be871a703118f2e
export default function ChiSiamoPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-tarot-gold mb-12 text-center">
          Chi Siamo
        </h1>

        <div className="space-y-12">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="font-serif text-3xl font-bold text-tarot-gold">
              La Nostra Storia
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-tarot-cream/90 text-lg leading-relaxed">
                Fondata nel [ANNO], STRULLO nasce dalla visione condivisa di un gruppo di artisti 
                e appassionati di cultura che desideravano creare uno spazio dove tradizione e 
                contemporaneità potessero dialogare liberamente.
              </p>
              <p className="text-tarot-cream/90 text-lg leading-relaxed">
                Il nostro nome, evocativo e misterioso, rappresenta la ricerca del significato 
                nascosto nelle cose, l'esplorazione dell'inconscio collettivo attraverso simboli 
                e archetipi che da sempre accompagnano l'umanità.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="font-serif text-3xl font-bold text-tarot-gold">
              I Nostri Valori
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-tarot-cream/90 text-lg leading-relaxed">
                L'associazione STRULLO si fonda su principi di inclusività, creatività e 
                ricerca spirituale. Crediamo nell'arte come strumento di trasformazione personale 
                e collettiva, e nell'importanza di preservare e reinterpretare le tradizioni culturali.
              </p>
              <ul className="list-disc list-inside text-tarot-cream/90 text-lg space-y-2 mt-4">
                <li>Promozione dell'arte e della cultura in tutte le sue forme</li>
                <li>Creazione di spazi inclusivi e accoglienti</li>
                <li>Esplorazione del simbolismo e della spiritualità</li>
                <li>Sostegno agli artisti emergenti</li>
                <li>Dialogo tra tradizione e innovazione</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="font-serif text-3xl font-bold text-tarot-gold">
              Cosa Facciamo
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-tarot-cream/90 text-lg leading-relaxed">
                STRULLO organizza regolarmente eventi culturali, workshop creativi, esposizioni 
                artistiche e momenti di condivisione. Le nostre attività spaziano dalle arti visive 
                alla performance, dalla letteratura alla musica, sempre con un'attenzione particolare 
                al simbolismo e alle dimensioni più profonde dell'esperienza umana.
              </p>
              <p className="text-tarot-cream/90 text-lg leading-relaxed">
                Collaboriamo con artisti, curatori e pensatori per creare progetti originali che 
                sfidano le convenzioni e aprono nuove prospettive sulla realtà che ci circonda.
              </p>
            </div>
          </section>

          {/* Section 4 - Immagine Collezione Tarocchi */}
          <section className="mt-12">
            <div className="aspect-video bg-tarot-dark/60 border-3 border-tarot-gold/40 rounded-sm overflow-hidden relative tarot-border">
              <img 
                src="/tarot-collection.jpg" 
                alt="Collezione Tarocchi STRULLO" 
                className="w-full h-full object-cover opacity-80"
                onError={(e) => {
                  // Fallback se l'immagine non è caricata
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="hidden w-full h-full flex-col items-center justify-center bg-tarot-gold/10">
                <p className="text-tarot-gold/50 font-serif text-xl text-center px-4">
                  Il mondo dei tarocchi STRULLO
                </p>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="bg-tarot-gold/5 border border-tarot-gold/20 rounded-lg p-8 text-center mt-12">
            <h3 className="font-serif text-2xl font-bold text-tarot-gold mb-4">
              Vuoi saperne di più?
            </h3>
            <p className="text-tarot-cream/80 mb-6">
              Contattaci per maggiori informazioni o per partecipare ai nostri eventi
            </p>
            <a
              href="mailto:info@strullo.it"
              className="inline-block bg-tarot-gold text-tarot-dark px-6 py-3 rounded-md font-semibold hover:bg-tarot-gold/90 transition-colors"
            >
              Scrivici
            </a>
          </section>
        </div>
      </div>
    </div>
  )
}

