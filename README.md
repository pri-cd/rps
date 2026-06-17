# Rock Paper Scissors — Responsive JS Game

A small, beginner-friendly Rock Paper Scissors web game built with plain HTML, CSS and JavaScript. This project demonstrates a responsive layout, simple game logic, and DOM manipulation.

## Table of contents
- [Demo](#demo)
- [Features](#features)
- [How to run](#how-to-run)
- [Project structure](#project-structure)
- [How the game works](#how-the-game-works)
- [Notes about the code](#notes-about-the-code)
- [Ideas / Next steps](#ideas--next-steps)
- [Credits](#credits)
- [License](#license)

## Demo

- Open the project folder and open [index.html](index.html) in your browser (double-click or drag into the browser).
- Optional (VS Code): install the *Live Server* extension and click **Go Live** to preview while editing.

## Features

- Responsive layout using Flexbox and CSS variables
- Best-of-5 gameplay (change `NO_OF_ROUNDS` in [assets/script.js](assets/script.js))
- Per-round score bins for Player and Machine
- Final result message and a Reset button to replay

## How to run

1. Open [index.html](index.html) in your browser (no build tools required).
2. (Optional) Use Live Server in VS Code for a live preview while you edit.

## Project structure

- [index.html](index.html) — main page and markup
- [assets/styles.css](assets/styles.css) — styling and responsive layout
- [assets/script.js](assets/script.js) — game logic and DOM interaction
- `assets/` — icons and images used in the UI

## How the game works

- `getMachineChoice()` returns a random choice: `rock`, `paper`, or `scissors`.
- `playGame(humanChoice)` increments the round and evaluates the result for that round.
- `executeLogicForGame()` compares choices using a `beats` mapping, updates scores, and returns the round result.
- `displayResults()` appends per-round score bins and shows the final message after `NO_OF_ROUNDS` rounds.
- The `Reset Game` button removes score bins and resets counters.

## Notes about the code

- The JavaScript is plain ES6 and kept small and readable. See [assets/script.js](assets/script.js) for constants near the top (`NO_OF_ROUNDS`, score container IDs).
- Styling uses CSS variables and Flexbox; check [assets/styles.css](assets/styles.css).

## Ideas / Next steps

- Add keyboard accessibility and ARIA attributes for screen-reader support
- Make the number of rounds configurable from the UI
- Add animations or sound for round results
- Persist high scores using `localStorage`
- Deploy using GitHub Pages for a public demo

## Credits

- Icons: Rock paper scissors icons created by Freepik — Flaticon (already credited in the page footer).

## License

- MIT — feel free to reuse and learn from this project.
