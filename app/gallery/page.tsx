"use client"

import { Card } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

// Dati delle immagini - sostituire con dati reali
const galleryItems = [
  {
    id: 1,
    title: "Evento 1",
    url: "https://drive.google.com/...",
    type: "google-drive",
    thumbnail: null, // TODO: aggiungere URL thumbnail
  },
  {
    id: 2,
    title: "Workshop Tarocchi",
    url: "https://instagram.com/p/...",
    type: "instagram",
    thumbnail: null,
  },
  {
    id: 3,
    title: "Esposizione Artistica",
    url: "https://drive.google.com/...",
    type: "google-drive",
    thumbnail: null,
  },
  {
    id: 4,
    title: "Performance Live",
    url: "https://instagram.com/p/...",
    type: "instagram",
    thumbnail: null,
  },
  {
    id: 5,
    title: "Rituale Collettivo",
    url: "https://drive.google.com/...",
    type: "google-drive",
    thumbnail: null,
  },
  {
    id: 6,
    title: "Mostra Fotografica",
    url: "https://instagram.com/p/...",
    type: "instagram",
    thumbnail: null,
  },
]

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-tarot-gold mb-4 text-center">
          Gallery
        </h1>
        <p className="text-center text-tarot-cream/80 mb-12 text-lg">
          Una selezione dei nostri eventi, workshop ed esposizioni
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="overflow-hidden tarot-card-hover h-full">
                {/* Image Placeholder */}
                <div className="aspect-square bg-tarot-gold/10 relative overflow-hidden">
                  {/* TODO: Sostituire con vere immagini */}
                  {item.thumbnail ? (
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-tarot-gold/50 font-serif text-6xl">✦</span>
                    </div>
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-tarot-dark/0 group-hover:bg-tarot-dark/70 transition-all duration-300 flex items-center justify-center">
                    <ExternalLink className="text-tarot-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4">
                  <h3 className="font-serif text-xl font-semibold text-tarot-gold group-hover:text-tarot-gold/80 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-tarot-cream/60 mt-1">
                    {item.type === "instagram" ? "Instagram" : "Google Drive"}
                  </p>
                </div>
              </Card>
            </a>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-16 bg-tarot-gold/5 border border-tarot-gold/20 rounded-lg p-8 text-center">
          <p className="text-tarot-cream/80">
            Vuoi condividere le tue foto di un evento STRULLO?{" "}
            <a href="mailto:gallery@strullo.it" className="text-tarot-gold hover:underline font-semibold">
              Contattaci
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

