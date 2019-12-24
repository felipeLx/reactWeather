import React from 'react';

const Weather = ({description, city, country, error, temperature}) => {

    function matchValues () {
        
         if(description) {
            const weatherDescription = description.split(' ');
            const keyWords = ['cloudy', 'clouds', 'cloud', 'overcast', 'clear', 'snow', 'rain'];
            for(let i=0; i < weatherDescription.length; i++) {
                switch(keyWords.includes(weatherDescription[i])) {
                    case 'clear':
                        // eslint-disable-next-line
                        return <img src='../../pics/clear.jpg' />;
                    case 'clouds':
                        // eslint-disable-next-line
                        return <img src='../../pics/cloud.jpg' />;
                    case 'snow':
                        // eslint-disable-next-line
                        return <img src='../../pics/snow.jpg' />;
                    case 'rain':
                        // eslint-disable-next-line
                        return <img src='../../pics/rain.jpg' />;    
                    default:
                        // eslint-disable-next-line
                        return <img src='../../pics/cloud.jpg' />;
                }
                // if(keyWords.includes(weatherDescription[i])) {
                //     // eslint-disable-next-line
                //     return <img src='https://media.freestocktextures.com/cache/74/8b/748ba3fe5976d8b03219a64851d2790d.jpg' />
                }
            }
    }

    return (
        <div>
            {city && country && <p>{city}, {country}</p>}
            {temperature && <p>{temperature} ºC</p>}
            {description && <p>Conditions: {description}</p>}
            {error && <p>{error}</p>}
            {description && <p>{matchValues()}</p>}
        </div>
    );
};

export default Weather;