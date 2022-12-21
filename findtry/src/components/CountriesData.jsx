import React from 'react'
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
                            {country.name.common}
                        </li>
                    )

                })
            }
            {search.searching == false &&
                currentCountriesData.map(country => {
                    return (
                        <li>
                            {country.name.common}
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default CountriesData