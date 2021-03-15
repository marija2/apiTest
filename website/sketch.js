function setup() {
  createCanvas(400, 400);
  background(51);
  drawData();
  var button = select( '#btnSubmit' );

  button.mousePressed ( submitWord );
}

function submitWord() {

  console.log('clicked');
  
  var word = select( '#word' ).value();
  var score = select ( '#score' ).value();

  loadJSON('add/' + word + '/' + score, finished );

  function finished ( data ) {
    console.log("finished");
    drawData();
  }
}

function gotData ( data ) {
  background(51);
  var keys = Object.keys ( data );
  for ( var i = 0; i < keys.length; ++i ) {
    fill(255);
    textSize(12);
    text ( keys[i], 10, 20 * i );
  }
}

function drawData ( data ) {
  loadJSON ( 'all', gotData );
}
