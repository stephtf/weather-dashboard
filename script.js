var cityInput = document.querySelector("input");
var citySelected = document.getElementById("city-name")
var cityInfoBox = document.getElementById("city-info"); 
var searchButton = document.getElementById("button-one");
var searchedCityBox = document.getElementById("searched-cities");
var today = moment().format("MM/DD/YYYY");

// cards 
var day1 = document.getElementById("card-one");
var day2 = document.getElementById("card-two");
var day3 = document.getElementById("card-three");
var day4 = document.getElementById("card-four");
var day5 = document.getElementById("card-five");

var apiKey = "b3cc49f19c3c941f8b66e1efd8c739ca";
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

function searchCity(event) {
    event.preventDefault(); 
    var currentCity = cityInput.value;
    citySelected.textContent = currentCity + " (" + today + ")"; 

    var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput.value + "&units=imperial&appid=" + apiKey; 
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
    
    // function for 5 day forecast 
    function fiveDay() { 
    var apiTwo = "1f8359689e9ef0383a6293e4c86b638f";
    var queryUrlTwo = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInput.value + "&units=imperial&appid=" + apiTwo; 

    fetch(queryUrlTwo) 
    .then(response => response.json())
    .then(data => {
            console.log(data);


day1.innerHTML = "";

var tomorrow = moment().add(1, 'days').format("MM/DD/YYYY");
var date1 = document.createElement("h3");
date1.textContent = tomorrow;
day1.appendChild(date1); 

for (i = 0; i < 3; i++) {
    let dataTag = document.createElement("li");
    let keyNames = [data.list[4].main.temp, data.list[4].wind.speed, data.list[4].main.humidity];
    keyValue = keyNames[i];
    let key = ["Temp: ", "Wind: ", "Humidity: "];
    let unit = [" °F", " MPH", "%"]
    dataTag.textContent = key[i] + keyValue + unit[i];  
    day1.appendChild(dataTag);
    }

day2.innerHTML = "";

var twodays = moment().add(2, 'days').format("MM/DD/YYYY");
var date2 = document.createElement("h3");
date2.textContent = twodays;
day2.appendChild(date2); 

for (i = 0; i < 3; i++) {
    let dataTag = document.createElement("li");
    let keyNames = [data.list[12].main.temp, data.list[12].wind.speed, data.list[12].main.humidity];
    keyValue = keyNames[i];
    let key = ["Temp: ", "Wind: ", "Humidity: "];
    let unit = [" °F", " MPH", "%"]
    dataTag.textContent = key[i] + keyValue + unit[i];  
    day2.appendChild(dataTag);
    }

day3.innerHTML = "";

var threedays = moment().add(3, 'days').format("MM/DD/YYYY");
var date3 = document.createElement("h3");
date3.textContent = threedays;
day3.appendChild(date3); 

for (i = 0; i < 3; i++) {
    let dataTag = document.createElement("li");
    let keyNames = [data.list[20].main.temp, data.list[20].wind.speed, data.list[20].main.humidity];
    keyValue = keyNames[i];
    let key = ["Temp: ", "Wind: ", "Humidity: "];
    let unit = [" °F", " MPH", "%"]
    dataTag.textContent = key[i] + keyValue + unit[i];  
    day3.appendChild(dataTag);
    }

day4.innerHTML = "";

var fourdays = moment().add(4, 'days').format("MM/DD/YYYY");
var date4 = document.createElement("h3");
date4.textContent = fourdays;
day4.appendChild(date4); 

for (i = 0; i < 3; i++) {
    let dataTag = document.createElement("li");
    let keyNames = [data.list[28].main.temp, data.list[28].wind.speed, data.list[28].main.humidity];
    keyValue = keyNames[i];
    let key = ["Temp: ", "Wind: ", "Humidity: "];
    let unit = [" °F", " MPH", "%"]
    dataTag.textContent = key[i] + keyValue + unit[i];  
    day4.appendChild(dataTag);
    }

day5.innerHTML = "";

var fivedays = moment().add(5, 'days').format("MM/DD/YYYY");
var date5 = document.createElement("h3");
date5.textContent = fivedays;
day5.appendChild(date5);

for (i = 0; i < 3; i++) {
    let dataTag = document.createElement("li");
    let keyNames = [data.list[36].main.temp, data.list[36].wind.speed, data.list[36].main.humidity];
    keyValue = keyNames[i];
    let key = ["Temp: ", "Wind: ", "Humidity: "];
    let unit = [" °F", " MPH", "%"]
    dataTag.textContent = key[i] + keyValue + unit[i];  
    day5.appendChild(dataTag);
    }
    })
}
             
    function setHistory() {
        localStorage.setItem('City', currentCity); 
        var searchedCity = localStorage.getItem('City');
        var cityStored = document.createElement("button");
        cityStored.textContent = searchedCity;
        searchedCityBox.appendChild(cityStored);
        console.log(searchedCity);

    }
    fiveDay();
    setHistory(); 
}; 


// event listener for clicking on "search"
searchButton.addEventListener('click', searchCity);


// getting the searched cities to also run the searchCity function 

   




