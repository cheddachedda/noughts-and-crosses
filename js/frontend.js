const RENDER = {
  render: function () {
    this.renderScoreboard();
    this.renderMessage();
    this.renderBoard();
    if (GAME.result > 0) {
      this.renderWinningCombo();
    }
  },

  renderScoreboard: function () {
    // Set active token
    if (GAME.currentPlayer === 1) {
      $('#player1-button').addClass('active');
      $('#player2-button').removeClass('active');
    } else if (GAME.currentPlayer === 2) {
      $('#player2-button').addClass('active');
      $('#player1-button').removeClass('active');
    }

    // Only re-render on game over.
    if (GAME.result) {
      $('#player1-wins').text(GAME.players[1].wins);
      $('#player2-wins').text(GAME.players[2].wins);
    }
  },

  renderMessage: function () {
    const $message = $('.message');
    const player1 = GAME.players[1].token;
    const player2 = GAME.players[2].token;

    if (GAME.result !== null) {
      $message.text('Game Over');
    } else {
      $message.text(GAME.players[GAME.currentPlayer].token + '\'s Turn');
    }
  },

  renderBoard: function () {
    for (let i = 0; i < GAME.board.length; i++) {
      const $cell = $(`#${i}`);
      if (GAME.board[i]) {
        const player = GAME.board[i];
        const token = GAME.players[player].token;
        $cell.text(token);
        $cell.addClass('selected');
      } else {
        $cell.text('');
        $cell.removeClass('selected');
      }
    }
  },

  renderWinningCombo: function () {
    const winningCombo = GAME.checkForWin();
    for (let cell of winningCombo) {
      $(`#${cell}`).addClass('winning-cell');
    }
  }
};

const HANDLERS = {
  clickCell: function (cell) {
    GAME.play(cell);
    RENDER.render();
  },

  reset: function () {
    GAME.reset();
    RENDER.render();
  },
}

$(document).ready(function () {
  $('.cell').on('click', function () {
    const id = Number($(this)[0].id);
    HANDLERS.clickCell(id);
  });

  $('#reset-button').on('click', function () {
    HANDLERS.reset();
  });

  $('#show-game-over').on('click', function () {
    HANDLERS.winningComboAnimation();
  })
});
