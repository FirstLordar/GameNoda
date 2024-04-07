const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
    prompt: "",
})
const dictionary = require('../dictionary/index.js')
const games = require("../games"); 

const gamesArray = (
  { id: "1", game: games.knightDragonAndPrincessGame },
  { id: "2", game: games.poleChudesGame },
  { id: "3", game: games.makeWordGame },
  { id: "4", game: games.blackJackGame },
  { id: "5", game: games.trueOrFalseGame },
  { id: "6", game: games.dropCoin }
)

async function startGame(Gameid) {

}