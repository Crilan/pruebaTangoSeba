$( document ).ready(function() {
  $('#gal1').click(function() {
  $('#gallery1').load('galeria.html');
  //$('#gallery1').css({"display":"block"});
  $('#target').toggle('slow', function() {
    // Animation complete.
  });
});
});
