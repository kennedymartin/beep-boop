// Business (or back-end) logic:
var result = Array.apply(null, {length: N}).map(Number.call, Number) 
var string = result.toString() 
  if str.includes("1") {
  result.push("Beep!");
} else if str.includes("2") {
  result.push ("Boop");
} else str.includes("3") {
  result.push ("I'm sorry, Dave. I'm afraid I can't do that.")
}
    console.log(result);


// Everything below this line is user interface (or front-end) logic:

$(document).ready(function(){
  $("form#form1").submit(function() {
    event.preventDefault();
    var N = parseInt($("#input").val());
   
    // var result = Array.apply(null, {length: N}).map(Number.call, Number)
    // console.log(result);
    
    // if result ()

    // var string = result.toString();
    
  });
});