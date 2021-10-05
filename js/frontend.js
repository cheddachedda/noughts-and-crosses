const renderBoard = function () {
  for (let i = 0; i < BACKEND.board.length; i++) {
    const cell = $(`#${i}`)
    if (BACKEND.board[i] === 1) {
      cell.text('X');
    } else if (BACKEND.board[i] === 2) {
      cell.text('O');
    } else {
      cell.text('');
    }
  }
};

$(document).ready(function () {
  $('.cell').on('click', function () {
    const id = Number($(this)[0].id);
    BACKEND.play(id);
    renderBoard();
  });

  $('#open-modal').on('click', function () {
    $('.modal').css('display', 'block');
  })

  $('#close-modal').on('click', function () {
    $('.modal').css('display', 'none');
    BACKEND.reset();
    console.log(BACKEND);
    renderBoard();
  })
});
