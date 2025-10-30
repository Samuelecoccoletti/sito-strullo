# STRULLO - Associazione Culturale

Sito web ufficiale dell'associazione culturale STRULLO, costruito con Next.js 14, Tailwind CSS, shadcn/ui e Stripe.

## 🎨 Design

Il sito è ispirato all'estetica dei tarocchi con:
- **Colori**: Sfondo scuro (#0a0a0a), oro antico (#d4af37), crema (#f5f5dc)
- **Tipografia**: Playfair Display (serif) per i titoli, Inter (sans-serif) per il body
- **Stile**: Mistico ma moderno, con effetti hover e transizioni fluide

## 🚀 Setup

### 1. Installazione Dipendenze

```bash
npm install
```

### 2. Configurazione Stripe

Crea un file `.env.local` nella root del progetto (puoi copiare da `.env.local.example`):

```env
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Per ottenere le chiavi Stripe:
1. Vai su [https://stripe.com](https://stripe.com) e crea un account
2. Dalla Dashboard, vai su "Developers" > "API keys"
3. Copia la Secret key e la Publishable key

### 3. Configurazione Prodotti Shop (Opzionale)

Per popolare lo shop:
1. Vai su Stripe Dashboard > "Products"
2. Crea nuovi prodotti con immagini, descrizioni e prezzi
3. Assicurati che i prodotti siano attivi
4. Lo shop caricherà automaticamente i prodotti tramite l'API di Stripe

### 4. Avvio Server di Sviluppo

```bash
npm run dev
```

Il sito sarà disponibile su [http://localhost:3000](http://localhost:3000)

## 📁 Struttura del Progetto

```
strullo-site/
├── app/                      # App Router di Next.js
│   ├── api/                  # API Routes
│   │   ├── checkout/         # Stripe checkout endpoints
│   │   └── products/         # Recupero prodotti da Stripe
│   ├── chi-siamo/            # Pagina Chi siamo
│   ├── gallery/              # Galleria immagini
│   ├── news/                 # News ed eventi
│   ├── privacy/              # Privacy Policy
│   ├── shop/                 # Shop con integrazione Stripe
│   ├── soci/                 # Pagina iscrizione soci
│   ├── success/              # Pagina conferma pagamento
│   ├── layout.tsx            # Layout principale
│   ├── page.tsx              # Homepage
│   └── globals.css           # Stili globali
├── components/
│   ├── layout/               # Header e Footer
│   └── ui/                   # Componenti UI (shadcn/ui)
├── data/
│   └── news.json             # Dati news (gestito localmente)
├── lib/
│   ├── stripe.ts             # Configurazione Stripe
│   └── utils.ts              # Utility functions
└── public/                   # File statici (da popolare)
```

## 🖼️ Inserimento Immagini e Logo

### Logo

Il logo è attualmente un placeholder nel file `components/layout/header.tsx`:

```tsx
<div className="w-12 h-12 bg-tarot-gold/20 border-2 border-tarot-gold rounded-sm flex items-center justify-center">
  {/* TODO: Inserire logo qui */}
  <span className="text-tarot-gold font-serif text-xl font-bold">S</span>
</div>
```

Per sostituirlo:
1. Aggiungi il tuo logo in `public/logo.png`
2. Modifica il codice sostituendo il `div` con:
```tsx
<Image src="/logo.png" alt="STRULLO" width={48} height={48} />
```

### Immagine Hero Homepage

L'immagine hero è in `app/page.tsx`. Per sostituire il placeholder:
1. Aggiungi l'immagine in `public/hero-tarot.jpg`
2. Modifica la sezione hero aggiungendo:
```tsx
<Image 
  src="/hero-tarot.jpg" 
  alt="STRULLO" 
  fill 
  className="object-cover opacity-30"
  priority
/>
```

### Gallery

Aggiorna i dati in `app/gallery/page.tsx` sostituendo gli URL placeholder con i tuoi link reali:
```tsx
const galleryItems = [
  {
    id: 1,
    title: "Nome Evento",
    url: "https://drive.google.com/file/d/...",
    thumbnail: "/gallery/evento-1.jpg", // Aggiungi in public/gallery/
  },
  // ...
]
```

## 📝 Gestione News

Le news sono gestite tramite un file JSON locale in `data/news.json`. Per aggiungere nuove news:

```json
{
  "id": 6,
  "title": "Titolo Nuovo Evento",
  "excerpt": "Breve descrizione",
  "date": "2025-03-15",
  "content": "Contenuto completo dell'evento"
}
```

## 💳 Pagamenti Stripe

Il sito supporta due tipi di pagamento:

### 1. Iscrizione Soci (`/soci`)
- Importo minimo: €10
- L'utente può scegliere di contribuire con un importo maggiore
- I dati (nome, cognome, email) vengono salvati nei metadata di Stripe

### 2. Shop (`/shop`)
- Prodotti caricati automaticamente da Stripe
- Supporta spedizioni in Italia e paesi europei selezionati
- Calcolo automatico costi di spedizione al checkout

### Webhook (Opzionale)

Per gestire eventi post-pagamento (es. invio email automatiche), configura un webhook Stripe:
1. Vai su Stripe Dashboard > "Developers" > "Webhooks"
2. Aggiungi endpoint: `https://tuo-dominio.com/api/webhook`
3. Seleziona eventi: `checkout.session.completed`

## 🌐 Deploy

### Vercel (Consigliato)

1. Push il codice su GitHub
2. Vai su [vercel.com](https://vercel.com)
3. Importa il repository
4. Aggiungi le variabili d'ambiente:
   - `STRIPE_SECRET_KEY`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `NEXT_PUBLIC_APP_URL` (URL del tuo sito su Vercel)
5. Deploy!

### Altri Provider

Il sito può essere deployato su qualsiasi provider che supporti Next.js 14+ (Netlify, Railway, ecc.)

## 🛠️ Personalizzazione

### Colori

I colori del tema sono definiti in `tailwind.config.ts`:
```ts
tarot: {
  dark: "#0a0a0a",
  gold: "#d4af37",
  cream: "#f5f5dc",
}
```

### Font

I font sono configurati in `app/layout.tsx`:
- **Serif**: Playfair Display
- **Sans**: Inter

Per cambiarli, modifica gli import:
```tsx
import { TuoFont } from "next/font/google"
```

## 📧 Configurazione Email

Gli indirizzi email nei vari componenti sono placeholder. Aggiorna con le tue email reali:
- Footer: `info@strullo.it`
- Gallery: `gallery@strullo.it`
- Shop: `shop@strullo.it`
- Privacy: `privacy@strullo.it`

## 📱 Responsive

Il sito è completamente responsive con breakpoint:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔒 Sicurezza

- Le chiavi Stripe sono gestite tramite variabili d'ambiente
- I pagamenti sono processati direttamente da Stripe (PCI compliant)
- Nessuna informazione di carte di credito è memorizzata sui nostri server

## 📄 Licenza

Copyright © 2025 STRULLO Associazione Culturale. Tutti i diritti riservati.

## 🤝 Supporto

Per domande o problemi:
- Email: info@strullo.it
- GitHub Issues: [Link al repository]

---

**Note**: Questo è un template base. Assicurati di personalizzare tutti i contenuti, aggiungere immagini reali, e consultare un legale per la Privacy Policy prima di andare in produzione.
