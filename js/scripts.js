$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#blue").click(function() {
    $("body").removeClass();
    $("body").addClass("blue-background");
  
  $("button#original").click(function() {
    $("body").removeClass();
    $("body").addClass("orignial-background");
  
    $(".box".hover(function(){
    $(this).css("background","green");

    
    }));
  });
});
});