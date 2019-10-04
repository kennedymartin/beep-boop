// Business (or back-end) logic:
var range = function(number) {

}



// Everything below this line is user interface (or front-end) logic:

$(document).ready(function(){
  $("form#number").submit(function() {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = range(number);
  });
});