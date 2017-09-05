
    

    
var x = document.getElementById("demo");
var lat;
var long;

//Get the users location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

//Find the weather in that location.  Plug into a weather API to get the
function setPosition(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;

    //need to take this url and generate the stuff you will need to get your wather app working. 
    var json = 'https://fcc-weather-api.glitch.me/api/current?lat=' + lat + '&lon=' + long;
    alert(json);
}





