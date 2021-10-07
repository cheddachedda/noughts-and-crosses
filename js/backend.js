const GAME = {
  board: [
    '', '', '',
    '', '', '',
    '', '', ''
  ],

  settings: {
    boardSize: 3,
    opponentType: 'Computer' // 'Friend' or 'Computer'
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
    // Won't continue if the cell is already taken
    if (!this.result && this.board[cell] === '') {
      this.board[cell] = this.currentPlayer;
      this.players[this.currentPlayer].moves.push(cell);
      this.endMove();
    }
  },

  // Assigns a winner or draw if there is a result, else changes the current player.
  endMove: function () {
    // Win:
    if (this.checkForWin()) {
      this.result = this.currentPlayer;
      this.players[this.currentPlayer].wins++;
    }
    // Draw:
    else if (this.players[1].moves.length + this.players[2].moves.length === 9) {
      this.result = 0;
    }
    // Still playing:
    else {
      this.currentPlayer += this.currentPlayer === 1 ? 1 : -1;
    }
  },

  // Checks for a win after each move; returns the winning combo array or false.
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

  // Computer plays a random empty cell
  computerPlay: function () {
    // Creates an array of empty cellIDs
    let emptyCells = [];
    for (let i = 0; i < 9; i++) {
      if (this.board[i] === '') {
        emptyCells.push(i);
      }
    }

    // Chooses a random cellID from emptyCells
    const random = Math.floor(Math.random() * emptyCells.length);
    const computerChoice = emptyCells[random];
    this.play(computerChoice);
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
