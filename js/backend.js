const GAME = {
  board: [
    '', '', '',
    '', '', '',
    '', '', ''
  ],

  settings: {
    boardSize: 3,
    opponentType: 'Friend' // 'Easy', 'Medium', 'Impossible' or 'Friend'
  },

  players: {
    1: {
      token: 'X',
      wins: 0,
      moves: [],
    },
    2: {
      token: 'O',
      wins: 0,
      moves: [],
    },
  },

  currentPlayer: 1,   // either 1 or 2

  play: function ( cell ) {
    const p = this.currentPlayer;
    // Adds the move to the game board
    this.board[cell] = p;
    // Adds the move to the player's list of moves
    this.players[p].moves.push(cell);

    // Assigns a winner or draw if there is a result, else changes the current player.
    if (this.checkForWin()) {
      this.result = this.currentPlayer;
      this.players[this.currentPlayer].wins++;
    } else if (this.players[1].moves.length + this.players[2].moves.length === 9) {
      this.result = 0;
    } else {
      this.currentPlayer += this.currentPlayer === 1 ? 1 : -1;
    }
  },

  checkForWin: function () {
    const moves = this.players[this.currentPlayer].moves;
    for (let combo of this.winningCombos) {
      const won = combo.every(n => moves.includes(n));
      if (won) {
        return combo;
      };
    }
    return false;
  },

  // TODO: Write a function that can get the winningCombos, based on board size.
  getWinningCombos: function () {

  },

  winningCombos: [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
  ],

  result: null, // null (still playing), 0 (draw), 1 (player 1) or 2 (player 2)

  reset: function () {
    this.board = [ '', '', '', '', '', '', '', '', '' ];
    this.players[1].moves = [];
    this.players[2].moves = [];
    this.currentPlayer = 1;
    this.result = null;
  }
};
