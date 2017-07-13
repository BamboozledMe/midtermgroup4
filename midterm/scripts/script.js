$(function (){

  var reservedSeats = [];

  $(".col-lg-2").each(function(index) {
    $(this).attr("id", "seat" + index);
  });

  $("#reserveButton").on("click", function() {
    $("body").append("<div class = \"reservePopup\"> </div>");
  });

  $('.col-lg-2').on('click', function (){
    $(this).toggleClass('selected');

  });

  $("#deselectButton").on("click", function() {
    $(".col-lg-2").each(function() {
      $(this).removeClass("selected");
    });
  });


});
