import React from 'react'
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { searchingContext } from '../hooks/SearchContext';

const CountriesData = ({ currentCountriesData, filteredData }) => {

    const isSearching = useContext(searchingContext);

    return (
        <ul>
            {isSearching.searching == true &&
                filteredData.map(country => {
                    return (
                        <li key={country.cioc}>
                            <Link to={country.name.common.toLowerCase()}>
                                {country.name.common}
                            </Link>
                        </li>
                    )

                })
            }
            {isSearching.searching == false &&
                currentCountriesData.map(country => {
                    return (
                        <li key={country.cioc}>
                            <Link to={country.name.common.toLowerCase()}>
                                {country.name.common}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default CountriesData