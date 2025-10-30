import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import newsData from "@/data/news.json"
import { Calendar } from "lucide-react"

export default function NewsPage() {
  // Ordina le news per data (più recenti prima)
  const sortedNews = [...newsData].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("it-IT", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date)
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-tarot-gold mb-4 text-center">
          News & Eventi
        </h1>
        <p className="text-center text-tarot-cream/80 mb-12 text-lg">
          Resta aggiornato sulle ultime novità e sui prossimi eventi
        </p>

        {/* News List */}
        <div className="space-y-6">
          {sortedNews.map((item) => (
            <Card key={item.id} className="tarot-card-hover">
              <CardHeader>
                <div className="flex items-center gap-2 text-tarot-gold/80 text-sm mb-2">
                  <Calendar size={16} />
                  <time dateTime={item.date}>{formatDate(item.date)}</time>
                </div>
                <CardTitle className="text-2xl">{item.title}</CardTitle>
                <CardDescription className="text-base">
                  {item.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-tarot-cream/80">{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-tarot-gold/5 border border-tarot-gold/20 rounded-lg p-8 text-center">
          <h3 className="font-serif text-2xl font-bold text-tarot-gold mb-4">
            Non perdere nessun aggiornamento
          </h3>
          <p className="text-tarot-cream/80 mb-6">
            Diventa socio per ricevere la newsletter mensile con tutti gli eventi e le iniziative
          </p>
          <a
            href="/soci"
            className="inline-block bg-tarot-gold text-tarot-dark px-6 py-3 rounded-md font-semibold hover:bg-tarot-gold/90 transition-colors"
          >
            Diventa socio
          </a>
        </div>
      </div>
    </div>
  )
}

