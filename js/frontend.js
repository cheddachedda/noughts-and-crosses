const render = function () {
  for (let i = 0; i < GAME.board.length; i++) {
    const cell = $(`#${i}`)
    if (GAME.board[i] === 1) {
      cell.text('X');
    } else if (GAME.board[i] === 2) {
      cell.text('O');
    } else {
      cell.text('');
    }
  }
};

const handleClickCell = function (cell) {
  GAME.play(cell);
  render();
  if (GAME.result) showModal();
}

$(document).ready(function () {
  render();

  $('.cell').on('click', function () {
    const id = Number($(this)[0].id);
    handleClickCell(id);
  });
});
