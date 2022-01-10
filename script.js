var cityInput = document.querySelector("input");
var citySelected = document.getElementById("city-name")
var cityInfoBox = document.getElementById("city-info"); 
var searchButton = document.getElementById("button-one");
var searchedCityBox = document.getElementById("searched-cities");
var today = moment().format("MMM Do, YYYY");

var apiKey = "b3cc49f19c3c941f8b66e1efd8c739ca";
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

function searchCity(event, currentCity) {
    event.preventDefault(); 
    // var currentCity = cityInput.value;
    citySelected.textContent = currentCity + " (" + today + ")"; 

    var queryUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + currentCity + "&appid=" + apiKey; 
    fetch(queryUrl) 
        .then(response => response.json())
        .then(data => {
            console.log(data);

            cityInfoBox.innerHTML = "";

            for (i = 0; i < 3; i++) {
            var dataTag = document.createElement("li");
            var keyNames = [data.main.temp, data.wind.speed, data.main.humidity]
            keyValue = keyNames[i];
            var key = ["Temp: ", "Wind: ", "Humidity: "];
            var unit = [" °F", " MPH", "%"]
            dataTag.textContent = key[i] + keyValue + unit[i];  
            cityInfoBox.appendChild(dataTag);
            }
        });
    
    function setHistory() {
        localStorage.setItem('City', currentCity); 
        var searchedCity = localStorage.getItem('City');
        var cityStored = document.createElement("button");
        cityStored.textContent = searchedCity;
        searchedCityBox.appendChild(cityStored);
        cityStored.addEventListener('click', function() {searchCity(event,currentCity);});
    }
    setHistory(); 
}

// event listener for clicking on "search"
searchButton.addEventListener('click', function() {searchCity(event,cityInput.value);});

// if (cityStored.addEventListener('click') {
//     cityInput = cityStored.value;

// } 








