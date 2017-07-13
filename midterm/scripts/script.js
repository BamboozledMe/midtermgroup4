$(function (){

  var reservedSeats = [];

  $(".col-lg-2").each(function(index) {
    $(this).attr("id", "seat" + index);
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
