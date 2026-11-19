# Zombie Percolation 🧟

Eine interaktive Simulation, in der sich eine "Zombieapokalypse" über ein Raster ausbreitet. Jede Zelle ist entweder leer oder von einem Menschen bewohnt. Irgendwo sitzt Patient 0, und ab da steckt jeder Zombie seine bewohnten Nachbarn an, Schritt für Schritt.

Dahinter steckt eigentlich Perkolation (also wie sich z.B. Wasser durch ein poröses Material "durchfrisst"). Die Theorie sagt, dass ab ca. 59 % Bevölkerungsdichte der Ausbruch plötzlich das ganze Raster erreicht. Das will ich mit eigenen Daten nachweisen.

## Warum dieses Projekt?

Das Projekt ist Teil meiner Tech-Orientierung (Fullstack-Roadmap). Ich will damit meine Lücken bei React, automatisierten Tests, Backend und SQL schliessen und wieder sicherer werden, selbstständig Code zu schreiben (ohne KI für den Code).

## Tech-Stack

- React + TypeScript
- Vite
- Tailwind CSS
- pnpm
- später: kleines Node-Backend + PostgreSQL, um Experimente zu speichern und auszuwerten

## Starten

```bash
pnpm install
pnpm dev
```

Danach im Browser http://localhost:5173 öffnen.

## Stand

- [x] Projekt aufgesetzt (Vite, React, TypeScript, Tailwind)
- [ ] Raster erzeugen
- [ ] Ausbreitung Schritt für Schritt
- [ ] Raster anzeigen und steuern (Dichte, Grösse, Tempo, Patient 0)
- [ ] Optik "Nachtkarte"
- [ ] Tests (Unit, Komponenten, End-to-End)
- [ ] Backend + Datenbank für Experimente
- [ ] Auswertung der 59 %-Schwelle

## Inspiration

Der Rasteransatz stammt aus dem Projekt "Game of Life" von Robert Heaton (Programming Projects for Advanced Beginners #2).
