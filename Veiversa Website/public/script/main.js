$(function () {
  $(document).ready(function () {
    // LOADER
    setTimeout(function () {
      $(".content").fadeIn(800);
      $(".loader-content").fadeOut(300);
    }, 800);
  });
});

$(document).ready(function () {
 $(window).scroll(function(){
   var scroll = $(window).scrollTop();
   if(scroll > 100){
    $(".arrowup").fadeIn();
   }else{
     $(".arrowup").fadeOut();
   }
 });
  $(".arrowup").click(function(){
    $("html").animate({scrollTop:0});
  });
  $("#home").click(function(){
    $("html").animate({scrollTop:0});
  });
 $(".about-btn").click(function(){
    $("html").animate({scrollTop:550});
  });
  
});
