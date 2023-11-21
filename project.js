const api = "575a865e61a036bd001dee4fc2a2cb66";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchbox = document.querySelector(".searchbar");
const searchbutton = document.querySelector(".btn");
const icons = document.querySelector(".icon");
async function check(city) {
  const r = await fetch(apiurl + city + `&appid=${api}`);
  var data = await r.json();
  console.log(data);
  document.querySelector(".city").innerHTML = "Wheather in " + data.name;
  document.querySelector(".temp").innerHTML = data.main.temp + "°C";

  document.querySelector(".humidity").innerHTML =
    "Humidity :" + data.main.humidity + "%";
  document.querySelector(".wind").innerHTML =
    "Wind speed: " + data.wind.speed + "km/hr";
  document.querySelector(".description").innerHTML =
    data.weather[0].description;
}

searchbutton.addEventListener("click", () => {
  check(searchbox.value);
});
