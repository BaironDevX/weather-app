// Api and Url:

const apiKey = 'a1518a04d13e41e6d4a03ca233036447';
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Search: 

const searchBox = document.querySelector('.search input');
const btnSearch = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');
const tempDescription = document.querySelector('.temp-description');

// Function to Check Weather: 

async function checkWeather(city) {
    // Fetch to the weather url
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404) { // Error
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
    }
    else {
        let data = await response.json();
        console.log(data);

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) +'°c';
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%"
        document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == 'Clear') {
            weatherIcon.src = 'images/clear.png';
            tempDescription.innerHTML = 'Despejado';
        }
        else if(data.weather[0].main == 'Clouds') {
            weatherIcon.src = 'images/clouds.png';
            tempDescription.innerHTML = 'Nublado';

        }
        else if(data.weather[0].main == 'Drizzle') {
            weatherIcon.src = 'images/drizzle.png';
            tempDescription.innerHTML = 'Llovizna';
        }
        else if(data.weather[0].main == 'Mist') {
            weatherIcon.src = 'images/mist.png';
            tempDescription.innerHTML = 'Neblina';
        }
        else if(data.weather[0].main == 'Rain') {
            weatherIcon.src = 'images/rain.png';
            tempDescription.innerHTML = 'Lluvia';
        }
        else if(data.weather[0].main == 'Snow') {
            weatherIcon.src = 'images/snow.png';
            tempDescription.innerHTML = 'Nieve';
        }

        document.querySelector('.weather').style.display = "block";
        document.querySelector('.error').style.display = "none";
    }

}

btnSearch.addEventListener("click", () => {
    checkWeather(searchBox.value);
});