# 🚀 Guida Setup Rapida - STRULLO

Segui questi passaggi per avviare il sito web STRULLO.

## ✅ Checklist Pre-Lancio

### 1. Installa le Dipendenze

```bash
npm install
```

Se hai problemi con l'installazione, prova:
```bash
rm -rf node_modules package-lock.json
npm install
```

### 2. Configura Stripe

#### A. Crea Account Stripe
1. Vai su https://stripe.com e registrati
2. Completa la verifica del tuo account
3. Vai su Dashboard > Developers > API keys

#### B. Ottieni le Chiavi API
- **Secret key**: inizia con `sk_test_...` (per sviluppo) o `sk_live_...` (per produzione)
- **Publishable key**: inizia con `pk_test_...` (per sviluppo) o `pk_live_...` (per produzione)

#### C. Configura le Variabili d'Ambiente
Copia il file di esempio:
```bash
cp .env.local.example .env.local
```

Poi modifica `.env.local` inserendo le tue chiavi:
```env
STRIPE_SECRET_KEY=sk_test_TUA_CHIAVE_SEGRETA
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_TUA_CHIAVE_PUBBLICA
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Crea Prodotti su Stripe (per lo Shop)

1. Vai su Stripe Dashboard > Products
2. Clicca "Add product"
3. Compila:
   - Nome prodotto
   - Descrizione
   - Carica immagini
   - Imposta prezzo in EUR
   - Seleziona "One-time" come tipo di pagamento
4. Salva e assicurati che il prodotto sia **Active**
5. Ripeti per ogni prodotto

I prodotti appariranno automaticamente nello shop!

### 4. Aggiungi le Immagini

#### Logo
1. Salva il logo come `public/logo.png` (PNG trasparente, ~200x200px)
2. Modifica `components/layout/header.tsx` alla riga 22-26:

```tsx
// Sostituisci questo blocco:
<div className="w-12 h-12 bg-tarot-gold/20...">
  <span className="text-tarot-gold...">S</span>
</div>

// Con questo:
<Image src="/logo.png" alt="STRULLO" width={48} height={48} />
```

Non dimenticare di aggiungere l'import in cima al file:
```tsx
import Image from "next/image"
```

#### Hero Homepage
1. Salva l'immagine hero come `public/hero-tarot.jpg`
2. Modifica `app/page.tsx` alla riga ~14:

```tsx
<div className="absolute inset-0 bg-gradient-to-br...">
  {/* Aggiungi questa riga: */}
  <Image 
    src="/hero-tarot.jpg" 
    alt="STRULLO Background" 
    fill 
    className="object-cover opacity-30"
    priority
  />
  {/* ... resto del codice ... */}
</div>
```

#### Gallery
1. Aggiungi le immagini in `public/gallery/`
2. Modifica `app/gallery/page.tsx` alle righe 7-30, sostituendo i dati placeholder:

```tsx
const galleryItems = [
  {
    id: 1,
    title: "Workshop Tarocchi 2025",
    url: "https://drive.google.com/...",  // Il tuo link
    type: "google-drive",
    thumbnail: "/gallery/evento-1.jpg",   // La tua immagine
  },
  // ...
]
```

### 5. Personalizza i Contenuti

#### Testi e Descrizioni
- `app/page.tsx` - Homepage
- `app/chi-siamo/page.tsx` - Chi siamo
- `components/layout/footer.tsx` - Footer con contatti

#### News ed Eventi
Modifica `data/news.json` aggiungendo/modificando le news:

```json
{
  "id": 1,
  "title": "Titolo Evento",
  "excerpt": "Breve descrizione",
  "date": "2025-03-15",
  "content": "Testo completo"
}
```

#### Email
Cerca e sostituisci gli indirizzi email placeholder in tutto il progetto:
- `info@strullo.it`
- `gallery@strullo.it`
- `shop@strullo.it`
- `privacy@strullo.it`

### 6. Test in Locale

Avvia il server di sviluppo:
```bash
npm run dev
```

Apri http://localhost:3000 e testa:
- ✅ Navigazione tra le pagine
- ✅ Form iscrizione soci
- ✅ Shop (se hai creato prodotti)
- ✅ Responsive design (mobile/tablet/desktop)
- ✅ Checkout Stripe (usa carte di test: 4242 4242 4242 4242)

### 7. Deploy su Vercel

#### A. Prepara il Codice
```bash
git init
git add .
git commit -m "Initial commit - STRULLO website"
```

Puoi creare un repository su GitHub e fare push:
```bash
git remote add origin https://github.com/tuo-username/strullo-site.git
git push -u origin main
```

#### B. Deploy
1. Vai su https://vercel.com e accedi con GitHub
2. Clicca "New Project"
3. Importa il repository `strullo-site`
4. In "Environment Variables" aggiungi:
   - `STRIPE_SECRET_KEY`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `NEXT_PUBLIC_APP_URL` (es: https://strullo.vercel.app)
5. Clicca "Deploy"

⚠️ **IMPORTANTE per la produzione:**
- Usa le chiavi Stripe LIVE (`sk_live_...` e `pk_live_...`)
- Configura un dominio personalizzato su Vercel
- Aggiorna `NEXT_PUBLIC_APP_URL` con il tuo dominio

### 8. Setup Webhook Stripe (Opzionale ma Consigliato)

Per ricevere notifiche di pagamenti completati:

1. Crea un endpoint webhook (esempio):
   - File: `app/api/webhook/route.ts`
   - Endpoint: `https://tuo-dominio.com/api/webhook`

2. Su Stripe Dashboard > Developers > Webhooks:
   - Clicca "Add endpoint"
   - URL: il tuo endpoint
   - Eventi: seleziona `checkout.session.completed`
   - Copia il "Signing secret" (inizia con `whsec_...`)

3. Aggiungi la variabile d'ambiente:
   ```env
   STRIPE_WEBHOOK_SECRET=whsec_...
   ```

## 🎨 Personalizzazione Avanzata

### Colori
Modifica `tailwind.config.ts`:
```ts
tarot: {
  dark: "#0a0a0a",   // Sfondo
  gold: "#d4af37",   // Oro
  cream: "#f5f5dc",  // Crema
}
```

### Font
Modifica `app/layout.tsx` per usare altri Google Fonts:
```ts
import { TuoFont } from "next/font/google"
```

### Animazioni
Aggiungi classi custom in `app/globals.css`

## 🆘 Troubleshooting

### Errore: "Module not found"
```bash
npm install
```

### Errore Stripe: "Invalid API key"
- Controlla che le chiavi in `.env.local` siano corrette
- Assicurati che `.env.local` sia nella root del progetto
- Riavvia il server (`npm run dev`)

### Prodotti non compaiono nello Shop
- Verifica che i prodotti siano "Active" su Stripe
- Controlla che abbiano un prezzo impostato
- Apri la console del browser per eventuali errori

### Immagini non si caricano
- Verifica che siano in `public/`
- Usa percorsi che iniziano con `/` (es: `/logo.png`)
- Controlla dimensioni e formato (PNG, JPG, WebP)

### Pagamenti non funzionano
- Usa carte di test: 4242 4242 4242 4242 (data futura, qualsiasi CVV)
- Controlla che `NEXT_PUBLIC_APP_URL` sia impostato correttamente
- Verifica i log in Stripe Dashboard > Developers > Logs

## 📚 Risorse Utili

- [Next.js Documentation](https://nextjs.org/docs)
- [Stripe Documentation](https://stripe.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)

## 💡 Prossimi Passi Suggeriti

1. **SEO**: Aggiungi metadata personalizzati in ogni pagina
2. **Analytics**: Integra Google Analytics o Plausible
3. **Newsletter**: Aggiungi integrazione con Mailchimp/SendGrid
4. **Blog**: Espandi la sezione News con un CMS (es. Sanity, Contentful)
5. **Social**: Aggiungi OpenGraph meta tags per condivisioni social
6. **Accessibilità**: Testa con screen reader e migliora l'a11y

## 📧 Supporto

Per domande o problemi, contatta: info@strullo.it

---

**Buon lancio! 🎉**

