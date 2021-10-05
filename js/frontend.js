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

const handleClickCell = function (cell) {
  BACKEND.play(cell);
  renderBoard();
  if (BACKEND.result) showModal();
}

const showModal = function () {
  $('.modal').text(BACKEND.result);
  $('.modal').css('display', 'block');
};

const closeModal = function () {
  BACKEND.reset();
  $('.modal').css('display', 'none');
  $('.modal').text('');
  renderBoard();
}

$(document).ready(function () {
  $('.cell').on('click', function () {
    const id = Number($(this)[0].id);
    handleClickCell(id);
  });

  $('#close-modal').on('click', function () {
    closeModal();
  })
});
