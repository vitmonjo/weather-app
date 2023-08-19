import "./styles.css";
import { fetchWeatherData } from "./fetchWeatherData";
import { setupCityObject } from "./setupCityObject";

function clearCityContainer() {
    const cityContainer = document.querySelector('.city-container');
    while (cityContainer.firstChild) cityContainer.removeChild(cityContainer.lastChild);
}

function addToScreen(cityObject) {

    clearCityContainer();

    const cityContainer = document.querySelector('.city-container');

    const tempC = document.createElement('div');
    const tempF = document.createElement('div');
    const cityName = document.createElement('div');
    const region = document.createElement('div');
    const countryName = document.createElement('div');
    const condition = document.createElement('div');
    const localTime = document.createElement('div');
    const icon = document.createElement('img');

    tempC.classList.add('temp-c');
    tempC.textContent = `${cityObject.temp.celsius}ºC`;
    tempF.classList.add('temp-f');
    tempF.textContent = `${cityObject.temp.fahrenheit}ºF`;

    cityName.classList.add('city-name');
    cityName.textContent = cityObject.cityName;

    region.classList.add('region');
    region.textContent = cityObject.region;

    countryName.classList.add('country-name');
    countryName.textContent = cityObject.countryName;
    
    condition.classList.add('condition');
    condition.textContent = cityObject.condition;

    localTime.classList.add('local-time');
    localTime.textContent = cityObject.localTime;

    icon.classList.add('icon');
    icon.src = cityObject.icon;

    cityContainer.append(tempC, tempF, cityName, region, countryName, condition, localTime, icon);
}


(function placeEventListener() {
    const input = document.querySelector('.search-input');
    const button = document.querySelector('.search-btn');

    button.addEventListener('click', async(e) => {
        const cityData = await fetchWeatherData(input.value);
        const cityObject = await setupCityObject(cityData);
        addToScreen(cityObject);
    })
})();
