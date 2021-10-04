const BACKEND = {
  board: [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
  ],
  moves: {
    1: [],
    2: []
  },

  currentPlayer: 1,   // either 1 or 2

  play: function (move) {
    // Adds the move to the game board
    this.board[move] = this.currentPlayer;

    // Adds the move to the player's list of moves
    this.moves[this.currentPlayer].push(move);

    console.log(
      `Player${this.currentPlayer}`,
      move,
      this.logBoard(),
      this.checkForWin( this.moves[this.currentPlayer])
    );

    const didWin = this.checkForWin(this.moves[this.currentPlayer]);

    if (didWin) {
      this.winner = this.currentPlayer;
    } else {
      this.currentPlayer += this.currentPlayer === 1 ? 1 : -1;
    }
  },

  winner: null,

  winningCombos: [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
  ],

  checkForWin: function (moves) {
    for (let combo of this.winningCombos) {
      const won = combo.every(n => moves.includes(n));
      if (won) return true;
    }
    return false;
  },

  // ONLY FOR TESTING
  logBoard: function () {
    console.log(BACKEND.board.slice(0, 3));
    console.log(BACKEND.board.slice(3, 6));
    console.log(BACKEND.board.slice(6));
  }
};

// BACKEND.play(4);
// BACKEND.play(3);
// BACKEND.play(0);
// BACKEND.play(8);
// BACKEND.play(1);
// BACKEND.play(5);
// BACKEND.play(7);
// logBoard();
