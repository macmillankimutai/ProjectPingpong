$(document).ready(function() {
  $("form#ping").submit(function(event) {
  event.preventDefault();
  var ping = parseInt($("input#ping").val());
  var result = ping(ping);
  $("#result").text();
 });
});

 for (var x=1; x <= 100; x++){
   if(x % 3 && x % 5) {
     document.write(x);
   } else {
     if( x % 3 == 0 ) {
        document.write("ping");
      }
      if( x % 5 == 0) {
        document.write("pong");
      }
    }
    document.write('<br>');
  }

console.log(ping(x));
