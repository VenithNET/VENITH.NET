// Games List
const GAMES = [
  {
    id: "arcadeFNF",
    url: "https://www.miniplay.com/embed/friday-night-funkin",
  },
  {
    id: "arcadeSuperMarioBros",
    url: "https://jcw87.github.io/c2-smb1/",
  },
  { id: "arcadeCatMario", url: "https://www.miniplay.com/embed/cat-mario" },
  {
    id: "arcadeTetris",
    url: "https://www.miniplay.com/embed/tetris-i1240",
  },
  { id: "arcadePacman", url: "https://www.miniplay.com/embed/pacman" },
  { id: "arcadeDino", url: "https://chromedino.com/" },
  {
    id: "arcadeMinesweeper",
    url: "https://www.miniplay.com/embed/minesweeper",
  },
  {
    id: "arcadeBattleships",
    url: "https://www.crazygames.com/embed/battleships-general-quarter",
  },
];
// Define Characters
const CHAR_LEFT = document.getElementById("charLeft");
const CHAR_RIGHT = document.getElementById("charRight");

// Change Game
const ARCADE_IFRAME = document.getElementById("arcadeIframe");
GAMES.forEach((game) => {
  const ELEMENT = document.getElementById(game.id);
  ELEMENT.addEventListener("click", () => {
    ARCADE_IFRAME.src = game.url;
    // Hide Characters
    CHAR_LEFT.style.display = "none";
    CHAR_RIGHT.style.display = "none";
  });
});

// Close Game
const CLOSE_GAME = document.getElementById("closeGame");
CLOSE_GAME.addEventListener("click", () => {
  ARCADE_IFRAME.src = "";
  document.getElementById("mouseGif").style.display = "block";
  CHAR_LEFT.style.display = "flex";
  CHAR_RIGHT.style.display = "flex";
});
