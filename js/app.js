$(document).ready(function() {

  $('.state-present').hide();
  $('.finale').hide();

  $('button#begin').click(function() {
    //alert('mouse entered .ryu div');
    //$('.ryu-still').hide();
    $('.instructions').hide();
    //$('.finale').hide();
    $('.state-one').show();
  });

  $('button#submit').click(function() {
    //alert('mouse entered .ryu div');
    //$('.ryu-still').hide();
    //$('.instructions').hide();
    $('.state-present').hide();
    $('.finale').show();
  });

  $('button#try-again').click(function() {
    //alert('mouse entered .ryu div');
    //$('.ryu-still').hide();
    $('.finale').hide();
    $('.state-one').show();
    //$('.instructions').show();

  });

});
