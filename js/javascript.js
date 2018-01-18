$(document).ready(function(){
    $("#coffee-button").click(function(){

      $("#coffee-button").addClass("active-btn").removeClass("nactive-btn");
      $("#food-button").addClass("nactive-btn");
      $("#drink-button").addClass("nactive-btn");

        $("#coffee").addClass("active").removeClass("desactivated");;
        $("#drink").addClass("desactivated");
        $("#food").addClass("desactivated");
    });


  $("#drink-button").click(function(){
    $("#drink-button").addClass("active-btn").removeClass("nactive-btn");
    $("#food-button").addClass("nactive-btn");
    $("#coffee-button").addClass("nactive-btn");

    $("#drink").addClass("active").removeClass("desactivated");
    $("#coffee").addClass("desactivated");
    $("#food").addClass("desactivated");
    });


  $("#food-button").click(function(){
    $("#food-button").addClass("active-btn").removeClass("nactive-btn");
    $("#coffee-button").addClass("nactive-btn");
    $("#drink-button").addClass("nactive-btn");

    $("#food").addClass("active").removeClass("desactivated");;
        $("#drink").addClass("desactivated");
        $("#coffee").addClass("desactivated");
    });


});
