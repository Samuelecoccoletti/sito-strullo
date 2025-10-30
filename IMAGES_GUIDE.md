# 📸 Guida Inserimento Immagini STRULLO

## Immagini da Salvare

Dalle immagini che hai fornito, salva i file nella cartella `public/` con i seguenti nomi:

### 1. Logo STRULLO
**File da salvare:** L'immagine con la scritta "Strullo" in bianco su sfondo nero (o quella blu su nero)
**Percorso:** `public/logo-strullo.png`
**Formato:** PNG con sfondo trasparente se possibile
**Dimensioni consigliate:** 400x120px circa

### 2. Tarocco "LO STRULLO" (Il Matto - numero 0)
**File da salvare:** L'illustrazione completa del tarocco con il personaggio, il gallo e la scritta "LO STRULLO"
**Percorso:** `public/tarot-lo-strullo.jpg`
**Formato:** JPG o PNG
**Dimensioni:** Mantieni la dimensione originale, sarà ridimensionata automaticamente

### 3. Illustrazioni delle Teste
**File da salvare:** Le illustrazioni in bianco e nero delle teste maschili stilizzate
**Percorsi:** 
- `public/illustrations/head-1.png`
- `public/illustrations/head-2.png`
- `public/illustrations/head-3.png`
**Formato:** PNG con sfondo trasparente
**Uso:** Queste saranno usate come elementi decorativi nel sito

### 4. Artwork con i Tarocchi Multipli
**File da salvare:** L'immagine che mostra varie carte dei tarocchi insieme
**Percorso:** `public/tarot-collection.jpg`
**Formato:** JPG
**Uso:** Può essere usato nella sezione "Chi siamo" o come background

### 5. Documento/Decreto (opzionale)
**Percorso:** `public/documents/decreto.jpg`
**Uso:** Può essere usato nella sezione "Chi siamo" per raccontare la storia

## Struttura Cartelle da Creare

```
public/
├── logo-strullo.png          ← Logo principale (bianco o blu su trasparente)
├── tarot-lo-strullo.jpg      ← Tarocco principale del Matto
├── tarot-collection.jpg      ← Collezione di tarocchi
├── favicon.ico               ← Crea una favicon dal logo
├── illustrations/
│   ├── head-1.png            ← Prima testa stilizzata
│   ├── head-2.png            ← Seconda testa
│   └── head-3.png            ← Terza testa
├── documents/
│   └── decreto.jpg           ← Documento decreto (opzionale)
└── gallery/
    └── (le tue foto eventi qui)
```

## Come Salvare le Immagini

### Da macOS:
1. Apri ogni immagine che ti ho chiesto di identificare sopra
2. Fai click destro > "Salva immagine con nome"
3. Naviga fino a `/Users/cocco/Desktop/sito-strullo/public/`
4. Salva con il nome esatto indicato sopra

### Comandi Rapidi:
Puoi anche creare le cartelle da terminale:

```bash
cd /Users/cocco/Desktop/sito-strullo/public
mkdir -p illustrations documents gallery
```

## Dopo Aver Salvato le Immagini

Il sito è già configurato per usare queste immagini nei posti giusti:
- ✅ Logo nell'header
- ✅ Tarocco nella homepage come hero
- ✅ Illustrazioni come elementi decorativi
- ✅ Stile e colori già aggiornati per riflettere l'estetica del tarocco

Basta salvare i file e fare refresh del browser!

## Test

Dopo aver salvato le immagini, visita:
- http://localhost:3000 (homepage con tarocco)
- Controlla che il logo sia visibile nell'header
- Verifica che le immagini si carichino correttamente

## Note sulla Palette Colori

I colori sono stati aggiornati per riflettere il tarocco "LO STRULLO":
- **Sfondo scuro**: #1a1410 (nero caldo con tocco marrone)
- **Oro**: #d4a959 (giallo dorato del tarocco)
- **Crema**: #f4eed8 (crema chiaro)
- **Rosso**: #8b3a3a (rosso profondo della tunica)
- **Verde**: #5a6d5a (verde erboso)
- **Giallo**: #e8c66f (giallo caldo dello sfondo tarocco)
- **Marrone**: #8b6f47 (marrone/ocra del mantello)

Tutto il sito usa ora questi colori! 🎨

