const renderBoard = function () {
  for (let i = 0; i < BACKEND.board.length; i++) {
    if (BACKEND.board[i] === 1) {
      $(`#${i}`).text('X');
    } else if (BACKEND.board[i] === 2) {
      $(`#${i}`).text('O');
    }
  }
};

$(document).ready(function () {
  $('.cell').on('click', function () {
    const id = Number($(this)[0].id);
    BACKEND.play(id);
    renderBoard();
  });
});
