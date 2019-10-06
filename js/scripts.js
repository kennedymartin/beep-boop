$(document).ready(function(){
  $("form#form1").submit(function() {
    event.preventDefault();
    var N = parseInt($("#input").val());
    var result = Array.apply(null, {length: N}).map(Number.call, Number)
    console.log(result);
    var string = result.toString();
    console.log(string);
  });
});