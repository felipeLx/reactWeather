import React, { useState } from 'react';
import Form from '../../components/form/Form';
import Weather from '../../components/weather/Weather';

const Layout = () => {
    const [weather, setWeather] = useState([]);
    const APIKEY = '92b3106c3e65a153964c760a41a887c9';

    async function fetchData(e) {
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        e.preventDefault();
        const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`)
            .then(res => res.json())
            .then(data => data);
            if(city && country) {
                setWeather({
                    data: apiData,
                    city: apiData.city,
                    country: apiData.sys.country,
                    description: apiData.weather[0].description,
                    temperature: (apiData.main.temp - 273.15).toFixed(2),
                    error: ""
                });
            } else {
                setWeather({
                    data: '',
                    city: '',
                    country: '',
                    description: '',
                    temperature: '',
                    error:"Please Type A City And Country"
                });
            }
    };

    return (
        <div>
            <Form getWeather={fetchData} />
            <Weather 
                city={weather.city}
                country={weather.country}
                description={weather.description}
                temperature={weather.temperature}
                error={weather.error}
             />
            {console.log(weather.data)}
        </div>
    );
};

export default Layout;