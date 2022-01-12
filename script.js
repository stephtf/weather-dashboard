var cityInput = document.querySelector("input");
var citySelected = document.getElementById("city-name")
var cityInfoBox = document.getElementById("city-info"); 
var searchButton = document.getElementById("button-one");
var searchedCityBox = document.getElementById("searched-cities");
var today = moment().format("MM/DD/YYYY");



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

// cards 
var day1 = document.getElementById("card-one");
var day2 = document.getElementById("card-two");
var day3 = document.getElementById("card-three");
var day4 = document.getElementById("card-four");
var day5 = document.getElementById("card-five");

// days for 5 day forecast
var tomorrow = moment().add(1, 'days').format("MM/DD/YYYY");
console.log(tomorrow); 
day1.textContent = tomorrow; 
var twodays = moment().add(2, 'days').format("MM/DD/YYYY");
console.log(tomorrow); 
var threedays = moment().add(3, 'days').format("MM/DD/YYYY");
console.log(tomorrow); 
var fourdays = moment().add(4, 'days').format("MM/DD/YYYY");
console.log(tomorrow); 
var fivedays = moment().add(5, 'days').format("MM/DD/YYYY");
console.log(tomorrow); 

// card data 
// let oneData = 

// let twoData = [data.list[12].main.temp, data.list[12].wind.speed, data.list[12].main.humidity];

// let threeData = [data.list[20].main.temp, data.list[20].wind.speed, data.list[20].main.humidity];

// let fourData = [data.list[28].main.temp, data.list[28].wind.speed, data.list[28].main.humidity];

// let fiveData = [data.list[36].main.temp, data.list[36].wind.speed, data.list[36].main.humidity];

for (i = 0; i < 3; i++) {
    let dataTag = document.createElement("li");
    let keyNamesOne = [data.list[4].main.temp, data.list[4].wind.speed, data.list[4].main.humidity];
    keyValue = keyNamesOne[i];
    let key = ["Temp: ", "Wind: ", "Humidity: "];
    let unit = [" °F", " MPH", "%"]
    dataTag.textContent = key[i] + keyValue + unit[i];  
    day1.appendChild(dataTag);
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



   




