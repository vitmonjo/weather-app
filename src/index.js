import "./styles.css";
import { fetchWeatherData } from "./fetchWeatherData";
import { setupCityObject } from "./setupCityObject";

(function placeEventListener() {
    const input = document.querySelector('.search-input');
    const button = document.querySelector('.search-btn');

    button.addEventListener('click', async(e) => {
        const cityData = await fetchWeatherData(input.value);
        // const cityObject = await setupCityObject(cityData);
    })
})();
