const GAME = {
  board: [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
  ],

  moves: {
    1: [],
    2: [],
  },

  currentPlayer: 1,   // either 1 or 2

  play: function (cell) {
    // Updates the game board
    this.board[cell] = this.currentPlayer;
    //
    this.moves[this.currentPlayer].push(cell);
    ////////////////////////
    console.log(
      `Player${this.currentPlayer}`,
      cell,
      logBoard(),
      this.checkForWin( this.moves[this.currentPlayer])
    );
    ////////////////////////
    this.currentPlayer += this.currentPlayer === 1 ? 1 : -1;
  },

  winningCombos: [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
  ],

  checkForWin: function (moves) {
    for (let combo of this.winningCombos) {
      const won = combo.every(n => moves.includes(n));
      if (won) return true;
    }
    return false;
  }
};


const logBoard = function () {
  console.log(GAME.board.slice(0, 3));
  console.log(GAME.board.slice(3, 6));
  console.log(GAME.board.slice(6));
};

GAME.play(4);
GAME.play(3);
GAME.play(0);
GAME.play(8);
GAME.play(1);
GAME.play(5);
GAME.play(7);
// logBoard();
