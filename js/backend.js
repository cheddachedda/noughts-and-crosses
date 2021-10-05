const BACKEND = {
  board: [
    '', '', '',
    '', '', '',
    '', '', ''
  ],

  moves: {
    1: [],
    2: []
  },

  currentPlayer: 1,   // either 1 or 2

  play: function (move) {
    this.board[move] = this.currentPlayer;      // Adds the move to the game board
    this.moves[this.currentPlayer].push(move);  // Adds the move to the player's list of moves

    if (this.checkForWin()) {                                   //  if player won,
      this.winner = this.currentPlayer;                         //    assign a winner
      $('.modal').css('display', 'block');
    } else {                                                    //  else
      this.currentPlayer += this.currentPlayer === 1 ? 1 : -1;  //    change the current player
    }
  },

  winner: null,

  winningCombos: [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
  ],

  checkForWin: function () {
    const moves = this.moves[this.currentPlayer];
    for (let combo of this.winningCombos) {
      const won = combo.every(n => moves.includes(n));
      if (won) return true;
    }
    return false;
  },

  reset: function () {
    this.board = [ '', '', '', '', '', '', '', '', '' ];
    this.moves = { 1: [], 2: [] };
    this.currentPlayer = 1;
    this.winner = null;
  },

  // ONLY FOR TESTING
  logBoard: function () {
    console.log(BACKEND.board.slice(0, 3));
    console.log(BACKEND.board.slice(3, 6));
    console.log(BACKEND.board.slice(6));
  }
};
