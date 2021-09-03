const API_KEY = `bb847ab55a1e863a3c39785c37f96f0b`;
const searchTemperature = () => {
  const city = document.getElementById("city-name").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  //   console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};

const displayTemperature = (temperature) => {
  console.log(temperature);
};
