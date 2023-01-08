import React from 'react';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { searchingContext } from '../../hooks/SearchContext';
import CountryDataCard from '../countryDataCard/CountryDataCard';

const CountriesData = ({ currentCountriesData, filteredData }) => {

    const isSearching = useContext(searchingContext);

    return (
        <div>
            {isSearching.searching === true ?
                filteredData.map(country => (
                    <CountryDataCard key={country.name.common} countryData={country} />
                )) :
                currentCountriesData.map(country => (
                    <CountryDataCard key={country.name.common} countryData={country} />
                ))
            }
        </div>
    )
}

export default CountriesData