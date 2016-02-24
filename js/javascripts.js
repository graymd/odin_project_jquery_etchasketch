$(document).ready(function() {
  squareCreator(16);

  $('#wrapper').on("mouseover", ".square", function(){
    $(this).addClass("newColor");
  });

  $('button').click(function(){
    console.log('wtf');
    var userNumSquares = prompt('how many squares per row?');
    clearSquares();
    squareCreator(userNumSquares);
  });
});

function clearSquares() {
  $('.square').removeClass("newColor");
}

function squareCreator(numSquares) {
  var numSquaresSquared = (numSquares * numSquares)
    for (var i=0; i< numSquaresSquared; i++) {
      console.log('work mofo')
        $newSquare = $('<div class="square"></div>');
      $('#wrapper').append($newSquare);
    }
  setSquareHeightAndWidth(numSquares);
}

function setSquareHeightAndWidth(numSquares) {
  var squareSize = (960 / numSquares) - 2;
  $('.square').width(squareSize);
  $('.square').height(squareSize);
}

function clearSquares() {
  $('.square').remove();
}
