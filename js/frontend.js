const RENDER = {
  render: function () {
    this.renderScoreboard();
    this.renderMessage();
    this.renderBoard();
  },

  renderScoreboard: function () {
    $('#player1-wins').text(GAME.players[1].wins);
    $('#player2-wins').text(GAME.players[2].wins);
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
        $cell.removeClass('empty');
      } else {
        $cell.text('');
        $cell.addClass('empty');
      }
    }
  },
};

const HANDLERS = {
  clickCell: function (cell) {
    GAME.play(cell);
    RENDER.render();
  },

  reset: function () {
    GAME.reset();
    RENDER.render();
  }
}

$(document).ready(function () {
  $('.cell').on('click', function () {
    const id = Number($(this)[0].id);
    HANDLERS.clickCell(id);
  });

  $('#reset-button').on('click', function () {
    HANDLERS.reset();
  })
});
