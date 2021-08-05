fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=London&appid=" +
      API_KEY +
      "&units=metric"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.querySelector("#outdoor-temp").innerText = data.main.temp;
    });
