
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// Access the API key from environment variable
const apiKey = process.env.API_KEY;

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon")
const checkWeather=async(city)=>{
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status== 404){
        document.querySelector(".error").style.display ="block";
        document.querySelector(".weather").computedStyleMap.display ="none";
    }
    else{

        const data = await response.json();

    


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km";

    if(data.weather[0].main =="Clouds"){
        weatherIcon.src = "assets/clouds.png";

    }

    else if(data.weather[0].main =="Clear"){
        weatherIcon.src = "assets/clear.png";

    }

    else if(data.weather[0].main =="Rain"){
        weatherIcon.src = "assets/rain.png";

    }
    else if(data.weather[0].main =="Dizzle"){
        weatherIcon.src = "assets/dizzle.png";

    }
    else if(data.weather[0].main =="Mist"){
        weatherIcon.src = "assets/mist.png";

    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

}

    }

    

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

