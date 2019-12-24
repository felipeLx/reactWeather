import React, { useState } from 'react';
import countryList from 'react-select-country-list';
// import citiesList from 'react-select-cities';
import Select from 'react-select';

const Form = props => {
    const countryOptions = countryList().getData();
    // const citiesOptions = citiesList().getData();

    const [countryValue, setCountryValue] = useState('');
    // const [cityValue, setCityValue] = useState('');

    const changeCountryHandler = value => {
        setCountryValue(value);
    }

    // const changeCityHandler = value => {
    //     setCityValue({value});
    // }

    return (
        <div>
            <form onSubmit={props.getWeather}>
                <input
                type='text'
                placeholder='city'
                name='city'
                />
                {/* <Select 
                    options={citiesOptions}
                    value={cityValue}
                    onChange={changeCityHandler}
                    name='city'
                /> */}
                <Select 
                    options={countryOptions}
                    value={countryValue}
                    onChange={changeCountryHandler}
                    name='country'
                />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Form;