class UI {
    constructor() {
        // All the things
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.humidity = document.getElementById('w-humidity');
        this.pressure = document.getElementById('w-pressure');
        this.windSpeed = document.getElementById('w-wind-speed');
        this.windDirection = document.getElementById('w-wind-direction');
    }

    paint(weather) {
        this.location.textContent = `${weather.name}, ${weather.sys.country}`;
        this.desc.textContent = weather.weather[0].main;
        this.string.innerHTML = `${convertKelvinToCelsius(weather.main.temp)} &deg;C`;
        this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure}`;
        this.windSpeed.textContent = `Wind Speed: ${((weather.wind.speed)*3.6).toFixed(2)} km/h`;
        this.windDirection.textContent = `Wind Direction: ${windDirectionFromDegrees(weather.wind.deg)}`;        
    }
}