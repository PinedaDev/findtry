import React from 'react'
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { searchContext } from '../hooks/SearchContext';

const CountriesData = ({ currentCountriesData, filteredData }) => {

    const search = useContext(searchContext);

    return (
        <ul>
            {search.searching == true &&
                filteredData.map(country => {
                    return (
                        <li>
                            <Link to={country.name.common.toLowerCase()}>
                                {country.name.common}
                            </Link>
                        </li>
                    )

                })
            }
            {search.searching == false &&
                currentCountriesData.map(country => {
                    return (
                        <li>
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