// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function makeGrid(instance) {

  instance.preventDefault();
  var row = $('#inputHeight').val();
  var col = $('#inputWidth').val();
  makeGrid(row,col);
  console.log('height' + row + 'and width' + col)

})

// to make the table

function makeGrid(row,col) {
  for (var i = 1; i <= row; i++) {
      $('pixelCanvas').append("<tr></tr>");
      for (var j = 1; j <= col; j++) {
          $('tr:last').append("<td></td>");
          $('td').attr("class", 'pixels');
      }

// to add a color picker
$('.pixels').click(function (instance) {
  var brush = $('#colorPicker').val();
  $(event.target).css('background-color', brush);
});

}
