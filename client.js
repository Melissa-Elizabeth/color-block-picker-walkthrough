$(document).ready(function(){

var colorArray = ['Plum', 'AntiqueWhite', 'Aqua', 'HotPink', 'Aquamarine']; // colors to use later

// Loops through all of the colors of the array
for (var i = 0; i < colorArray.length; i++) {
  // Adding a new block
  var newColorBlock = $('<div>'); // Empty div -Not added to page yet
  newColorBlock.css('background-color', colorArray[i]); // Adds color to empty div (the ith color)
  newColorBlock.addClass('colorBlock'); // Adds class to empty div - gives height and width
  $('#colorBlockContainer').append(newColorBlock); // Add the div to the DOM
}

// Select a random color and add it to the DOM
var randomNumberSelected = randomNumber(0, colorArray.length - 1); // get random number from 0 through 4 and assigns that to randomNumberSelected
var randomColor = colorArray[randomNumberSelected]; // uses randomNumberSelected
$('#userColorPrompt').text(randomColor);
});

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
