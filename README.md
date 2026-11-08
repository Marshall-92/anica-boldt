# Anica Boldt – Büroservice für Handwerksbetriebe

Landingpage für Anica Boldt (Einzelunternehmerin, Henstedt-Ulzburg): DATEV-Zuarbeit, Personal & eAU für Handwerksbetriebe.

Statische Seite ohne Build-Schritt – HTML, CSS, ein kleines Script. Schrift (Archivo, OFL) ist lokal eingebunden, also keine Google-Fonts-Verbindung (DSGVO).

## Lokal ansehen

```bash
npx serve .
# oder einfach index.html im Browser öffnen
```

## Deploy

Auf Vercel als „Other"-Projekt importieren, Output-Verzeichnis = Repo-Root. Kein Build-Command nötig.

## Vor dem Livegang ausfüllen

- [x] WhatsApp-Nummer
- [x] Telefonnummer
- [x] Domain: www.anicaboldt.de (Vercel, DNS bei INWX)
- [ ] Postfach hallo@anicaboldt.de einrichten
- [ ] Impressum: Anschrift, USt-IdNr. bzw. Kleinunternehmer-Hinweis (gelb markiert)
- [ ] Datenschutzerklärung mit Generator passend zum Hoster erstellen
- [ ] Texte zum Leistungsumfang mit Anica final abstimmen (StBerG: nur vorbereitende Tätigkeiten)

## Struktur

```
index.html          Landingpage
impressum.html      Impressum (Platzhalter)
datenschutz.html    Datenschutz (Platzhalter)
assets/css/         styles.css
assets/js/          main.js (Zollstock-Zahlen, Jahr im Footer)
assets/img/         Fotos (WebP + JPG), OG-Bild, Favicon
assets/fonts/       Archivo Variable (wdth-Achse)
```
