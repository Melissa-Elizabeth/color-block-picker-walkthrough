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

});
