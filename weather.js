class Weather {
    constructor(city, countryCode) {
        this.apiKey = '957da6182093b27de647e8305104a347';
        this.city = city;
        this.countryCode = countryCode;
    }

    async getWeather() {
        let response = '';

        if(this.countryCode === '') {
            response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);
        } else {
            response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}`);
        }        

        const responseData = await response.json();

        return responseData;
    }

    changeLocation(city, countryCode) {
        this.city = city;
        this.countryCode = countryCode;
    }    
}