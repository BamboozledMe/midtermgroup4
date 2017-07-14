$(function (){

  // Initialize empty erray for seats that are reserved. Should include first name,
  // last name, email address, phone number, seat ID
  var reservedSeats = [];

  // Hides reserve button if nothing is selected
  toggleReserveButton();


  // Adds unique IDs for each seat (seat0, seat1, seat2...)
  $(".col-lg-2").each(function(index) {
    $(this).attr("id", "seat" + index);
  });

  // When seat is clicked, this block performs
  $('.col-lg-2').on('click', function (){

    // If the seat is reserved, nothing happens on click
    if($(this).hasClass("reservedSeat")){

    } else { // If seat is not reserved, this executes
      // Toggles class "selected"
      $(this).toggleClass('selected');

      // Hides reserve button if nothing is selected
      toggleReserveButton();

    }

  });

  // Executes when deselectButton is clicked
  $("#deselectButton").on("click", function() {

    // Removes "selected" class from all seats
    $(".col-lg-2").each(function() {
      $(this).removeClass("selected");
    });

    // Hides the reserve button
    $("#reserveButton").hide();
  });

  // Executes when submit is clicked in the modal
  $('#submitReservation').on('click', function(){

    // Loops through all selected seats
    $('.selected').each(function() {

      // Pushes an object of reserved seat into "reservedSeats" array
      reservedSeats.push(new reservedSeat($("#firstName").val(),
      $("#lastName").val(), $("#email").val(), $("#phoneNumber").val(), $(this).attr("id")));

      // Removes the class of "selected" and adds class of "reservedSeat" in seat to make
      // the seat no longer clickable. Displays tooltip on hover and make it so that it displays the
      // information of the reservation.
      $(this).removeClass('selected').addClass("reservedSeat").attr("data-toggle", "tooltip").
      attr("title", "Reserved By " + reservedSeats[reservedSeats.length - 1].
      firstName + " " + reservedSeats[reservedSeats.length - 1].lastName +
      "\nPhone Number: " + reservedSeats[reservedSeats.length - 1].phoneNumber +
      "\nEmail Address: " + reservedSeats[reservedSeats.length - 1].emailAddress);


      // Changes the image of available seat into reserved seat
      $(this).html('<img src="images/seat2.png" class="seatImage">');

    });

    // Clears out all the input in the modal, so they would be empty next time someone reserves seats
    $(".form-control").val('');
    $("#reserveButton").hide();

    // Checks if all seats are reserved
    var allReserved = true;
    $(".col-lg-2").each(function() {
      if (!$(this).hasClass("reservedSeat")){
        allReserved = false;
      }
    });

    // If all seats are reserved, notify users that the theatre is packed
    if (allReserved) {
      $("#selectYourSeat").text("Theatre*Is*Packed*Bye*Felicia");
      $("#selectYourSeat").addClass("byeFelicia");
      $("#deselectButton").hide();
      console.log("haha");
    }
  });

  // The class for reserved seat objects
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

// Function that hides reserve button when appropriate
function toggleReserveButton() {
  // If no seats are selected, then somethingSelectedGlobal will be false
  var somethingSelected = false;
  $(".col-lg-2").each(function(index) {
    if ($(this).hasClass("selected")) {
      somethingSelected = true;
    }
  });

  // If nothing is selected, reserved button would be hidden, and vice versa
  if (!somethingSelected) {
    $("#reserveButton").hide();
  }
  else {
    $("#reserveButton").show();
  }
}
