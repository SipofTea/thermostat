window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#city-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const cityName = document.querySelector("#city-name").value;

    displayCityTemp(cityName);
  });
});

const displayCityTemp = (cityName) => {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      API_KEY +
      "&units=metric"
    )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.querySelector("#outdoor-temp").innerText = data.main.temp;
    });
};
