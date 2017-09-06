
    
var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    var url = 'https://fcc-weather-api.glitch.me/api/current?lat=' + lat + '&lon=' + lon;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var obj = JSON.parse(this.responseText);
       
        document.getElementById("fcc_location").innerHTML = obj.name;
        document.getElementById("fcc_temp").innerHTML = obj.main.temp + " C";
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();    
    //url = JSON.stringify(url);
    //var obj = JSON.parse();

  //  document.getElementById("weather").innerHTML = url;//obj.name;
}



function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}

