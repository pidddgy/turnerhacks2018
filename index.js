$(document).ready(function(){
  var url = window.location.href;

  //getting the access token from url
  var access_token = url.split("#")[1].split("=")[1].split("&")[0];

  // get the userid
  var userId = url.split("#")[1].split("=")[2].split("&")[0];

  //console.log(access_token);
  //console.log(userId);
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.fitbit.com/1/user/'+ userId +'/activities/steps/date/today/1d.json');
  xhr.setRequestHeader("Authorization", 'Bearer ' + access_token);
  var squares = 10;
  xhr.onload = function() {
      var thing = xhr.responseText;
      var value = thing.substring(55, thing.indexOf("\"", 56));
	  //console.log(parseInt(value));
	  //console.log(typeof value);
	  //console.log(typeof parseInt(value));
	  squares = parseInt(value);
	  console.log(squares);
  };
  xhr.send();

  $('.grid-item').click(function(){
  if (squares > 0){
    $(this).toggleClass('clicked');
    squares--;
	console.log(squares);
    $('#howmanysquares').text("You can buy "+squares+" more squares.")
	console.log("after click")
  }
});

})
