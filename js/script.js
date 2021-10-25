$("p").click(function() {
  $(this).slideToggle('slow');
});

$("button").mouseenter(function() {
  $(this).removeClass("make-red").addClass("make-blue");
});

$("button").mouseleave(function() {
  $(this).removeClass("make-blue").addClass("make-red");
});

// $(document).ready(function() {
//   $(".box").click(function() {
//     var classNames = $(this).attr("class").split(" ");
//     $("." + classNames[1]).css("background-color", "red");
//   });
// });

$(document).ready(function() {
  $(".box").click(function() {
    /** 
     * When we click on an element that has a 
     * 'box' class, this event will be fired.
     */
    var classNames = $(this).attr("class").split(" ");
    var boxClass = classNames[0];
    var numberClass = classNames[1];
    if ($(this).css("background-color") == "rgb(255, 0, 0)") {
      // If this object is already red, turn it black
      $("." + numberClass).css("background-color", "#000");
    } else {
      //Else turn all elements with a box class black
      // and then change the colour of all elements
      // with the same class name as the clicked element
      // to red.
      $("." + boxClass).css("background-color", "#000");
      $("." + numberClass).css("background-color", "red");
    }
  });
});