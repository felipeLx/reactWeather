import React, { useState } from 'react';
import countryList from 'react-select-country-list';
import citiesList from 'react-select-cities';
import Select from 'react-select';

const Form = props => {
    const countryOptions = countryList().getData();
    const citiesOptions = citiesList().getData();

    const [countryValue, setCountryValue] = useState('');
    const [cityValue, setCityValue] = useState('');

    const changeCountryHandler = value => {
        setCountryValue({value});
    }

    const changeCityHandler = value => {
        setCityValue({value});
    }

    return (
        <form onSubmit={props.getWeather}>
            <Select 
                options={citiesOptions}
                value={cityValue}
                onChange={changeCityHandler}
            />
            <Select 
                options={countryOptions}
                value={countryValue}
                onChange={changeCountryHandler}
            />
            <button>Submit</button>
        </form>
    );
};

export default Form;