$(document).ready(function() {
  $("form#ping").submit(function(event) {
    event.preventDefault();
    var ping = parseInt($("input#number").val());
    var result = number(ping);
    $("#result").text(result);
  });
});

var ping= function(ping) {
  return true;
};
