const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city, weatherLocation.countryCode);

const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('new-city').value;
    const countryCode = document.getElementById('new-country-code').value;

    weather.changeLocation(city, countryCode);

    // Set location in local storage
    storage.setLocationData(city, countryCode);

    // Get and display weather
    getWeather();

    // Close modal
    $('#locModal').modal('hide');
});

function getWeather() {
    weather.getWeather()
        .then(results => ui.paint(results))
        .catch(err => console.log(err));
}

function convertKelvinToCelsius(kelvin) {
    let celsius = 0;
    let celsiusRounded = 0;

    if (kelvin < 0) {
        celsius = 'Absolute Zero'
    } else {
        celsius = kelvin - 273.15;
    }

    celsiusRounded = celsius.toFixed(2);

    return celsiusRounded;
}

function windDirectionFromDegrees(deg) {
    if (deg >= 337 || deg <= 22) {
        return 'N';
    } else if (deg <= 67) {
        return 'NE'
    } else if (deg <= 112) {
        return 'E'
    } else if (deg <= 157) {
        return 'SE'
    } else if (deg <= 202) {
        return 'S'
    } else if (deg <= 247) {
        return 'SW'
    } else if (deg <= 292) {
        return 'W'
    } else if (deg <= 337) {
        return 'NW'
    }
}