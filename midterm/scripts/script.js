$(function (){

  var reservedSeats = [];

  var somethingSelectedGlobal = false;
  $(".col-lg-2").each(function(index) {
    if ($(this).hasClass("selected")) {
      somethingSelectedGlobal = true;
    }
  });

  if (!somethingSelectedGlobal) {
    $("#reserveButton").hide();
  }
  else {
    $("#reserveButton").show();
  }





  $(".col-lg-2").each(function(index) {
    $(this).attr("id", "seat" + index);
  });

  $('.col-lg-2').on('click', function (){
    if($(this).hasClass("reservedSeat")){

    } else {
      $(this).toggleClass('selected');

      var somethingSelected = false;
      $(".col-lg-2").each(function(index) {
        if ($(this).hasClass("selected")) {
          somethingSelected = true;
        }
      });

      if (!somethingSelected) {
        $("#reserveButton").hide();
      }
      else {
        $("#reserveButton").show();
      }

    }

  });

  $("#deselectButton").on("click", function() {
    $(".col-lg-2").each(function() {
      $(this).removeClass("selected");
    });
    $("#reserveButton").hide();
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
    $("#reserveButton").hide();
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
