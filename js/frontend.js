const RENDER = {
  render: function () {
    this.renderBoard();
  },

  renderScoreboard: function () {

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
