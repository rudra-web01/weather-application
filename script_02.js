document.addEventListener("DOMContentLoaded", () => {
  const search = document.querySelector(".search-input");
  const searchBtn = document.querySelector(".search-btn");
  let card = document.querySelector(".card");

  const getWeather = async (city) => {
    let key = "13d3557911484c69e8e4e29b09c4f1da";
    let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

    let response = await fetch(API_URL);
    let data = await response.json();
    console.log(data);

    card.innerHTML = `
        <div class="temp-container">
            <div class="img-card">
                <img src="https://openweathermap.org/img/wn/${
                  data.weather[0].icon
                }@2x.png" alt="">
                <h2 class="temp">${Math.round(data.main.temp)}°C</h2>
            </div>
            </div>
            <div class="content">
                <h2 class="city-name">${data.name}, ${data.sys.country}</h2>
                <span class="weather">${data.weather[0].main}</span>
            </div>

            <div class="bottom-cards">
                <div class="humidity">
                 <img src="humidity.svg" alt="">
                 <span>${data.main.humidity}% humidity</span>
                </div>
                <div class="divider"></div>
                <div class="wind">
                 <img src="wind.svg" alt="">
                 <span>${data.wind.speed} KM/H</span>
                </div>
            </div>
        </div>
    `;
  };

  searchBtn.addEventListener("click", () => {
    getWeather(search.value);
  });
});