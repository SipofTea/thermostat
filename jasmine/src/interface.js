window.addEventListener("DOMContentLoaded", () => {
  const thermostat = new Thermostat();
  document.getElementById("thermostat-temp").innerText = thermostat.setTemperature();
  document.querySelector("#raise").addEventListener("click", () => {
    thermostat.up();
    document.getElementById("thermostat-temp").innerText = thermostat.setTemperature();
    document.querySelector("#energy-usage").innerText = thermostat.energyUse();
  });
  document.querySelector("#lower").addEventListener("click", () => {
    thermostat.down();
    document.getElementById("thermostat-temp").innerText = thermostat.setTemperature();
    document.querySelector("#energy-usage").innerText = thermostat.energyUse();
  });
  document.querySelector("#reset").addEventListener("click", () => {
    thermostat.reset();
    document.getElementById("thermostat-temp").innerText = thermostat.setTemperature();
    document.querySelector("#energy-usage").innerText = thermostat.energyUse();
  });
  document.querySelector("#powersave").innerText = thermostat.powerSaveSetting();
  document.querySelector("#powersave-button").addEventListener("click", () => {
    thermostat.powerSaveToggle();
    document.querySelector("#powersave").innerText = thermostat.powerSaveSetting();
  });
  document.querySelector("#energy-usage").innerText = thermostat.energyUse();
  
 // City temp display 
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
