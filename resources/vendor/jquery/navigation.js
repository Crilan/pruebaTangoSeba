$(document).ready(function(){
    $(".galeriaBtn").on("click", function(){
      $(".jumbo").fadeOut("slow",function(){});
      $(".reservar").fadeOut("slow", function(){});
      $(".galeria").delay(2000).fadeIn(1500,function(){});
    });
    $(".comoreservarBtn").on("click", function(){
      $(".galeria").fadeOut("slow", function(){});
      $(".jumbo").fadeOut("slow", function(){});
      $(".reservar").delay(2000).fadeIn(1500, function(){});
    });
    $(".volvergaleria").on("click", function(){
      $(".reservar").fadeOut("slow", function(){});
      $(".galeria").delay(2000).fadeIn(1500, function(){});
    })
  });
