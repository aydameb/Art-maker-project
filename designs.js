// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const $tableElement = $('#pixelCanvas');
const $colorPicker = $('#colorPicker');

// accepts user input  for height and width to use for making grid
$('#sizePicker').submit(function(event) {
    event.preventDefault();
    var row = $('#inputHeight').val();
    var col = $('#inputWidth').val();

    $tableElement.html('');
    makeGrid(row, col);
    addColor();
});

// to make the grid using user input from above

function makeGrid(row, col) {
    for (var i = 1; i <= row; i++) {
        $tableElement.append("<tr></tr>");
    }
    for (var j = 0; j < col; j++) {
        $('tr').append('<td></td>');
    }
}

// to paint cells  in response to clicks using color picked by user
function addColor() {
    $('td').click(function(event) {
        var brush = $colorPicker.val();
        $(event.currentTarget).css("background-color", brush);
    });
}
