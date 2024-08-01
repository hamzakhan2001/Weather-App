document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");

    async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        var data = await response.json();

        console.log(data);
        document.querySelector(".city").textContent = data.name;
        document.querySelector(".humidity").textContent = data.main.humidity + "%";
        document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°C";
        document.querySelector(".wind").textContent = data.wind.speed + "km/h";
        const weatherCondition = data.weather[0].main;
        updateWeatherIcon(weatherCondition);

        document.querySelector(".weather").style.display = "display";
        
    }

    function updateWeatherIcon(condition) {
        switch (condition) {
            case "Clouds":
                weatherIcon.src = "images/clouds.png";
                break;
            case "Rain":
                weatherIcon.src = "images/rain.png";
                break;
            case "Drizzle":
                weatherIcon.src = "images/drizzle.png";
                break;
            case "Clear":
                weatherIcon.src = "images/clear.png";
                break;
            case "Mist":
                weatherIcon.src = "images/mist.png";
                break;
            case "Snow":
                weatherIcon.src = "images/snow.png";
                break;
            default:
                weatherIcon.src = "";
        }
    }


    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    });
});







