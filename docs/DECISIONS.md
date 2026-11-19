# Entscheide

Hier halte ich fest, was ich wann entschieden habe und warum. Kurz, damit ich später noch weiss, wieso etwas so ist wie es ist.

---

## E-01: Zombieapokalypse als Thema (19.11.2026)

**Was:** Die Perkolation wird als "Zombieapokalypse" dargestellt. Zellen sind leer, Mensch oder Zombie. Ein Zombie steckt seine bewohnten Nachbarn sicher an.
**Warum:** Ein reines Raster mit Wasser fand ich zu trocken. Mit Zombies ist es visuell spannender und man versteht sofort, was passiert. Fachlich bleibt es trotzdem Perkolation, die 59 %-Schwelle gilt genauso.
**Alternative:** Klassisch Wasser in porösem Material, oder Ansteckung nur mit Wahrscheinlichkeit (hätte die Schwelle verschoben).

## E-02: Divs statt Canvas (19.11.2026)

**Was:** Das Raster wird als CSS-Grid aus Divs dargestellt, ähnlich wie beim Game of Life.
**Warum:** HTML und CSS kann ich sicher, und Effekte wie Leuchten oder Pulsieren gehen mit CSS einfach. So komme ich schneller zu sichtbaren Ergebnissen. Grenze liegt bei ca. 100 × 100 Zellen, das reicht.
**Alternative:** Canvas (schneller bei sehr vielen Zellen, aber für mich neues Terrain). Bleibt als Bonus, weil Logik und Anzeige getrennt sind.

## E-03: Vite + React statt Next.js (19.11.2026)

**Was:** Das Frontend läuft mit Vite und React.
**Warum:** Die Simulation ist eine einzige Seite, die im Browser rechnet. Next.js bringt viel mit (Server-Rendering, Routing), was ich hier nicht brauche. Ausserdem will ich das Backend später selber mit Node bauen, das steht so in meinem Delta.
**Alternative:** Next.js.

## E-04: pnpm statt npm (19.11.2026)

**Was:** Pakete werden mit pnpm verwaltet.
**Warum:** Persönliche Vorliebe, ist schneller und spart Speicherplatz.
**Alternative:** npm (Standard von Vite).

## E-05: ESLint statt Oxlint (19.11.2026)

**Was:** Als Linter nehme ich ESLint.
**Warum:** ESLint ist Standard in den meisten Projekten und Tutorials, ich finde also mehr Hilfe dazu.
**Alternative:** Oxlint (schneller, aber neuer und weniger verbreitet laut internet).

## E-06: Zombies "sterben" ohne Menschen in der Nähe (19.11.2026)

**Was:** Ein Zombie, der keine Menschen mehr als Nachbarn hat, wird zu einem toten Zombie (vierter Zustand).
**Warum:** Sieht besser aus, weil nur die Front leuchtet und dahinter alles verlöscht. Am Ergebnis der Ausbreitung ändert es nichts.
**Alternative:** Zombies bleiben einfach Zombies (nur drei Zustände).

## E-07: Starre Zombies mit 4 Nachbarn (19.11.2026)

**Was:** Zombies bewegen sich nicht und stecken nur oben, unten, links und rechts an.
**Warum:** Nur so ist es echte Perkolation und die Schwelle liegt bei ca. 59 %. Mit Diagonalen wären es ca. 41 %, und laufende Zombies würden leere Zellen einfach überqueren, dann gibt es gar keine Schwelle mehr.
**Alternative:** 8 Nachbarn oder laufende Zombies, beides geparkt als Idee für später.
