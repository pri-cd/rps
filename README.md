**Rock Paper Scissors — Responsive JS Game**

- **Project:**: A simple, responsive Rock Paper Scissors game built with plain HTML, CSS and JavaScript.
- **Level:**: Beginner — this is my first responsive website using JavaScript.

**Demo / Preview**
- **Open locally:**: Double-click [index.html](index.html) or serve the folder and visit `http://localhost:8000`.

**Features**
- **Responsive layout:**: Built with Flexbox and CSS variables to adapt to different screen sizes.
- **5-round gameplay:**: Best-of-5 rounds (see `NO_OF_ROUNDS` in [assets/script.js](assets/script.js)).
- **Score display:**: Shows per-round score bins for Player and Machine and a final result message.
- **Reset button:**: Clears scores and allows replaying without reloading the page.

**How to run (quick)**
- Open the project folder in your browser and open [index.html](index.html) (double-click the file or drag it into the browser).
- No npm, Python, or any server is required for basic usage — just open the file directly.
- Optional (VS Code): Install the *Live Server* extension and click "Go Live" to preview while editing.

**Project structure**
- **[index.html](index.html)**: Main page and markup.
- **[assets/styles.css](assets/styles.css)**: Styling and responsive layout.
- **[assets/script.js](assets/script.js)**: Game logic and DOM interaction.
- **assets/**: Contains icons and images used in the UI (SVG/PNG files).

**How the game works (brief)**
- `getMachineChoice()` picks a random choice for the machine.
- `playGame(humanChoice)` increments the round and runs `executeLogicForGame()`.
- `executeLogicForGame()` uses a `beats` mapping to determine the round winner, updates `humanScore`/`machineScore`, and calls `displayResults()`.
- `displayResults()` creates small score bins for each round and shows the final message after `NO_OF_ROUNDS`.
- `resetGameButton` clears the score containers and resets counters.

**Notes about the code**
- JavaScript is plain ES6 — easy to read and modify. Key values are at the top of [assets/script.js](assets/script.js) (`NO_OF_ROUNDS`, score container IDs).
- Styling uses CSS variables for theme colors and Flexbox for layout in [assets/styles.css](assets/styles.css).

**Ideas for improvement / Next steps**
- Add keyboard accessibility and ARIA labels for screen readers.
- Make the number of rounds configurable from the UI.
- Add subtle animations when a round is won/lost.
- Persist high scores in `localStorage`.
- Deploy the site with GitHub Pages for a public demo.

**Credits & Assets**
- Icons: Rock paper scissors icons created by Freepik — Flaticon (credit already in the page footer).

**License**
- MIT — feel free to reuse and learn from this project.
