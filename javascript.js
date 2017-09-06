
    
var x = '';
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
    console.log(url);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var obj = JSON.parse(this.responseText);
       
        document.getElementById("fcc_location").innerHTML = obj.name;
        document.getElementById("time").innerHTML = getTime();
        document.getElementById("fcc_description").innerHTML = obj.weather[0].description;
        document.getElementById("fcc_weather_icon").innerHTML ="<img src=" + obj.weather[0].icon + ">";
        document.getElementById("fcc_humidity").innerHTML = obj.main.humidity + "%";
        document.getElementById("fcc_wind_speed").innerHTML = obj.wind.speed + " mph  " + getWindDirection(obj.wind.deg);
        document.getElementById("fcc_temp").innerHTML = obj.main.temp + "°C";
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

function getTime()
{
    var date = new Date();
    var weekday = new Array(7);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var dayOfWeek = weekday[date.getDay()];
    var localTime = date.toLocaleTimeString();

    return dayOfWeek + ","  + localTime;

}

function getWindDirection(deg)
{
   
var wBearing = deg;

var wDir = "";
if (wBearing >= 348.75 || wBearing < 11.25)  { return wDir = "N";} else
if (wBearing >= 11.25 && wBearing < 33.75)   { return wDir = "NNE";} else
if (wBearing >= 33.75 && wBearing < 56.25)   { return wDir = "NE";} else
if (wBearing >= 56.25 && wBearing < 78.75)   { return wDir = "ENE";} else
if (wBearing >= 78.75 && wBearing < 101.25)  { return wDir = "E";} else
if (wBearing >= 101.25 && wBearing < 123.75) { return wDir = "ESE";} else
if (wBearing >= 123.75 && wBearing < 146.25) { return wDir = "SE";} else
if (wBearing >= 146.25 && wBearing < 168.75) { return wDir = "SSE";} else
if (wBearing >= 186.75 && wBearing < 191.25) { return wDir = "S";} else
if (wBearing >= 191.25 && wBearing < 213.75) { return wDir = "SSW";} else
if (wBearing >= 213.75 && wBearing < 236.25) { return wDir ="SW";} else
if (wBearing >= 236.25 && wBearing < 258.75) { return wDir = "WSW";} else
if (wBearing >= 258.75 && wBearing < 281.25) { return wDir = "W" ;} else
if (wBearing >= 281.25 && wBearing < 303.75) { return wDir = "WNW";} else
if (wBearing >= 303.75 && wBearing < 326.25) { return wDir = "NW";} else
                                             { return wDir = "NNW";};
}


//lets create a convert to Farenthiet function as well. 

//lets include the wind direction function also. 