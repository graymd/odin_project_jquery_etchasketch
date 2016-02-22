$(document).ready(function() {
  for (var i = 0; i< 256; i++) {
    $newSquare = $('<div class="square"></div>');
    $('#wrapper').append($newSquare);
  }

  $('.square').mouseover(function(){
    $(this).addClass("newColor");
  });

  $('button').click(function(){
    console.log('wtf');
    $('.square').removeClass("newColor");
    var numSquares=prompt('how many total squares would you like?')
      console.log(numSquares);
  });
});

