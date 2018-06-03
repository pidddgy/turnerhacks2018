function getAmountOfSteps(){
  // get the url
  //<a href="https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22CTP4&redirect_uri=http%3A%2F%2F127.0.0.1%3A3000%2F&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800"> Login to Fitbit </a>
  var url = window.location.href;

  //getting the access token from url
  var access_token = url.split("#")[1].split("=")[1].split("&")[0];

  // get the userid
  var userId = url.split("#")[1].split("=")[2].split("&")[0];

  console.log(access_token);
  console.log(userId);
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.fitbit.com/1/user/'+ userId +'/activities/steps/date/today/1d.json');
  xhr.setRequestHeader("Authorization", 'Bearer ' + access_token);
  xhr.onload = function() {
    if (xhr.status === 200) {
      var thing = xhr.responseText;
      var value = thing.substring(55, thing.indexOf("\"", 56));
      return value;
    }
  };
  xhr.send()
}

