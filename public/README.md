# Directory Public

Questa directory contiene tutti i file statici del sito.

## Struttura Consigliata

```
public/
├── logo.png              # Logo STRULLO (utilizzato nell'header)
├── hero-tarot.jpg        # Immagine hero della homepage
├── favicon.ico           # Favicon del sito
├── gallery/              # Immagini per la gallery
│   ├── evento-1.jpg
│   ├── evento-2.jpg
│   └── ...
└── products/             # Immagini prodotti (opzionale se usi Stripe)
    ├── prodotto-1.jpg
    └── ...
```

## Formato Immagini Consigliato

- **Logo**: PNG con sfondo trasparente, 200x200px minimo
- **Hero**: JPG o WebP, 1920x1080px (16:9), ottimizzato per web
- **Gallery**: JPG, 800x800px (quadrate), max 200KB ciascuna
- **Prodotti**: JPG, 1000x1000px (quadrate), max 300KB ciascuna

## Come Usare le Immagini

Nel codice, usa il percorso relativo alla cartella public:

```tsx
import Image from "next/image"

<Image src="/logo.png" alt="STRULLO" width={200} height={200} />
```

Oppure per immagini di sfondo in CSS:

```css
background-image: url('/hero-tarot.jpg');
```

