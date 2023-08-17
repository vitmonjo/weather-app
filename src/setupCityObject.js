export async function setupCityObject(cityData) {

    return new Promise((resolve, reject) => {
        const cityObject = {};
        cityObject.condition = cityData.current.condition.text;
        cityObject.icon = cityData.current.condition.icon;
        cityObject.countryName = cityData.location.country;
        cityObject.cityName = cityData.location.name;
        cityObject.region = cityData.location.region;
        cityObject.localtime = cityData.location.localtime;
        cityObject.temp = {
                celsius: cityData.current.temp_c,
                fahrenheit: cityData.current.temp_f
            };
        resolve(cityObject);
    })

}

