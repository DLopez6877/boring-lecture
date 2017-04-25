$(document).ready(function(){

  $("img").click(function(){
    $("#boring").toggleClass("hidden");
    $("#less-boring").toggleClass("hidden");
  });

  $(".btn-default").click(function(){
    $("body").removeClass();
    $("body").addClass("grey");
  });

  $(".btn-success").click(function(){
    $("body").removeClass();
    $("body").addClass("green");
  });
















});
