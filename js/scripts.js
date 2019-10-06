Business (or back-end) logic:
var result = Array.apply(null, {length: N}).map(Number.call, Number)
    console.log(result);


Everything below this line is user interface (or front-end) logic:

$(document).ready(function(){
  $("form#form1").submit(function() {
    event.preventDefault();
    var N = parseInt($("#input").val());
   
    // var result = Array.apply(null, {length: N}).map(Number.call, Number)
    // console.log(result);
    
    if result ()

    var string = result.toString();
    console.log(string);
  });
});