# Video-instruktioner för Hero-bakgrund

## Problem
Den externa video-URL:en fungerar inte längre på grund av att token har gått ut eller CORS-policy.

## Lösningar

### Alternativ 1: Ladda upp lokal video (Rekommenderat)
1. Skapa mappen `public/videos/` i projektet
2. Ladda upp din video som `hero-background.mp4` i denna mapp
3. I `app/page.tsx`, ta bort kommentarerna från raden:
   ```tsx
   backgroundVideo="/videos/hero-background.mp4"
   ```

### Alternativ 2: Använd en annan extern video-URL
Ersätt video-URL:en i `app/page.tsx` med en fungerande extern URL, till exempel:
```tsx
backgroundVideo="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
```

### Alternativ 3: Ta bort video och använd endast gradient
Om du inte vill ha video-bakgrund, låt bara `backgroundVideo` vara undefined eller ta bort den helt från Hero-komponenten.

## Video-krav
- Format: MP4 (rekommenderat)
- Storlek: Håll under 10MB för bästa prestanda
- Upplösning: 1920x1080 eller liknande widescreen-format
- Längd: 10-30 sekunder loop fungerar bra

## Nuvarande status
Videon är för närvarande inaktiverad och gradient-bakgrunden visas istället. 