const cityForm = document.getElementById("city-form");
const cityInput = document.getElementById("city-input");
const currentWeatherSection = document.getElementById("current-weather");
const forecastSection = document.getElementById("forecast");
const searchHistoryList = document.getElementById("search-history");

// Event listener for the city form
cityForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const cityName = cityInput.value.trim();

  // Call function to fetch weather data and update UI
  fetchWeatherData(cityName);
});

// Function to fetch weather data and update UI
function fetchWeatherData(cityName) {
  // Replace this with your actual OpenWeather API URL and API key
  const apiKey = "8f2bb1a57d0924ec2f86ef353b600756";
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;
  //const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}";
  // Fetch data from the API
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Update the UI with data
      updateCurrentWeather(data);
      updateForecast(data);
      addToSearchHistory(cityName);
    })
    .catch((error) => console.error("Error fetching data:", error));
}

// Function to update the current weather section
function updateCurrentWeather(data) {
  // Replace this with your code to update the current weather section
  const cityName = data.city.name;
  const currentWeatherElement = document.createElement("div");
  currentWeatherElement.textContent = `Current Weather in ${cityName}`;
  currentWeatherSection.appendChild(currentWeatherElement);
}

// Function to update the forecast section
function updateForecast(data) {
  // Replace this with your code to update the forecast section
  
}

// Function to add a city to the search history
function addToSearchHistory(cityName) {
    const listItem = document.createElement("li");
    listItem.textContent = cityName;
    searchHistoryList.appendChild(listItem);
}