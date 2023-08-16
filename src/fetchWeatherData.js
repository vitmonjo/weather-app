export async function fetchWeatherData(cityName) {

    return new Promise((resolve, reject) => {
        fetch(`https://api.weatherapi.com/v1/current.json?key=987c833980be467f8df164036232207&q=${cityName}`, {
            mode: 'cors'
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            resolve(response);
        })
    })

}