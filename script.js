var cityInput = document.querySelector("input");
var citySelected = document.getElementById("city-name")
var cityInfoBox = document.getElementById("city-info"); 
var searchButton = document.getElementById("button-one");
var searchedCityBox = document.getElementById("searched-cities");
var today = moment().format("MMM Do, YYYY");


var apiKey = "b3cc49f19c3c941f8b66e1efd8c739ca";
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

function searchCity(event) {
    event.preventDefault(); 
    var currentCity = cityInput.value;
    citySelected.textContent = currentCity + " (" + today + ")"; 

    var queryUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + cityInput.value + "&units=imperial&appid=" + apiKey; 
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

        // for (k = 0; k < 5; k++) {
        //     var day = [4, 12, 20, 28, 36]; 

        //     var fiveData = [data.list[day[k]].main.temp, data.list[day[k]].wind.speed, data.list[day[k]].main.humidity];

// cards 
var day1 = document.getElementById("card-one");
var day2 = document.getElementById("card-two");
var day3 = document.getElementById("card-three");
var day4 = document.getElementById("card-four");
var day5 = document.getElementById("card-five");

// card data 
let oneData = [data.list[4].main.temp, data.list[4].wind.speed, data.list[4].main.humidity];

let twoData = [data.list[12].main.temp, data.list[12].wind.speed, data.list[12].main.humidity];

let threeData = [data.list[20].main.temp, data.list[20].wind.speed, data.list[20].main.humidity];

let fourData = [data.list[28].main.temp, data.list[28].wind.speed, data.list[28].main.humidity];

let fiveData = [data.list[36].main.temp, data.list[36].wind.speed, data.list[36].main.humidity];

// arrays of cards and data 
let dayArrayEl = [day1, day2, day3, day4, day5];
let dataArray = [oneData, twoData, threeData, fourData, fiveData]; 

        for (j = 0; j < 5; j++) {
            cardEl = document.createElement("li");
            cardEl.textContent = dataArray[j];
            dayArrayEl[j].appendChild(cardEl);
        }
        }
    );
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



   




