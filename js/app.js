$(document).ready(function() {

  // Hide state questions and finale on page load
  $('.state-present').hide();
  $('.finale').hide();

  // Show state question when 'Begin' clicked
  $('button#begin').click(function() {
    $('.instructions').hide();
    $('.state-one').show();
  });

  // Show finale when 'Submit' clicked
  $('button#submit').click(function() {
    $('.state-present').hide();
    $('.finale').show();
  });

  // Show state question when 'Try Again' clicked
  $('button#try-again').click(function() {
    $('.finale').hide();
    $('.state-one').show();


  });

});
