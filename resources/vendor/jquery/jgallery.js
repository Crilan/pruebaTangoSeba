$( document ).ready(function() {
  $('#gal1').click(function() {
  alert("hola");
  $('#target').load('galeria.html');
  alert("hola2");
  $('#gallery1').css({"display":"block"});
  $('#gallery1').toggle('slow', function() {
    // Animation complete.
  });
});
});
