function ping(num){
  var result = [];
  for (var index=1; index <= num; index+=1) {
  if (index % 3 === 0 && index % 5 === 0 ) {
    result.push("pingpong");
  }else if (index % 3 == 0 ) {
      result.push("ping");
    }
    else if (index % 5 == 0 ) {
      result.push("pong");
  }
  else {
    result.push(index);
  }
}
  return result

}


$(document).ready(function(){
   $("form#ping").submit(function(){
      event.preventDefault();
      $("#result").empty();
      var num = parseInt($("input#numbers").val());
      var result=ping(num);
       result.forEach(function(i){
         $("#result").append('<li>' + i + "</li>");
      });
   });
});
