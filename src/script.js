function newCity() {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let city = document.querySelector("h1");
  city.innerHTML = `${cityInput.value}`;
}
let cityForm = document.querySelector("#new-city");
cityForm.addEventListener("submit", newCity);

let currentDate = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let currentHour = currentDate.getHours();
let currentMinute = currentDate.getMinutes();
if (currentMinute < 10) {
  currentMinute = `0${currentMinute}`;
}
if (currentHour < 10) {
  currentHour = `0${currentHour}`;
}
let day = days[currentDate.getDay()];
let date = document.querySelector("#day");
let time = document.querySelector("#time");
time.innerHTML = `${currentHour}:${currentMinute}`;
date.innerHTML = `${day}`;
