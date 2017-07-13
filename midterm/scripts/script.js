$(function (){

  var reservedSeats = [];

  $(".col-lg-2").each(function(index) {
    $(this).attr("id", "seat" + index);
  });

  $('.col-lg-2').on('click', function (){
    if($(this).hasClass("reservedSeat")){

    } else {
      $(this).toggleClass('selected');
    }

  });

  $("#deselectButton").on("click", function() {
    $(".col-lg-2").each(function() {
      $(this).removeClass("selected");
    });
  });

  $('#submitReservation').on('click', function(){
    $('.selected').each(function(){
      reservedSeats.push(new reservedSeat($("#firstName").val(),
      $("#lastName").val(), $("#email").val(), $("#phoneNumber").val(), $(this).attr("id")));
      $(this).removeClass('selected').addClass("reservedSeat").attr("data-toggle", "tooltip").
      attr("title", "Reserved By " + $("#firstName").val() + " " + $("#lastName").val() + "\nPhone Number: "
    + $("#phoneNumber").val() + "\nEmail Address: " + $("#email").val());
      $(this).html('<img src="images/seat2.png" class="seatImage">');

    });

    $(".form-control").val('');


  });

  class reservedSeat {
    constructor(first, last, email, phone, seatID) {
      this.firstName = first;
      this.lastName = last;
      this.phoneNumber = phone;
      this.emailAddress = email;
      this.seatNum = seatID;
    }
  }


});
