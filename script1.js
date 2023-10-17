const apikey = '8b7c3d91f4bd4867a94124010231010'; //api key Acces 
const stateDropdown = document.getElementById('state');
const getWeather = document.getElementById('getWeather');
const weatherInfo = document.getElementById('weatherInfo');


//Event listner for get weather button

getWeather.addEventListener('click' , ()=>{
    const selectedState = stateDropdown.value;
    fetchWeatherData(selectedState); // create a function.
})


// Async and await---

async function fetchWeatherData(stateCode){

    try{
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${stateCode},india`);
        if(!response.ok) {
            console.log('Weather data not found');
        }
        const data = await response.json();

        const location = data.location;
        const temprature = data.current.temp_c;
        const condition = data.current.condition.text;

        weatherInfo.innerHTML = `<h2>${location.name}, ${location.country}</h2>
        <p> Temprature: ${temprature}°C</p>
        <p>Weather: ${condition}</p>`;
    }
    catch (error){
        console.error(error);
        weatherInfo.innerHTML = 'Weather data not available.'
    }
}