import React from 'react'
import { useEffect, useState } from 'react';

const CountriesData = ({ countriesData }) => {
    return (
        <ul>
            {countriesData.map(country => (
                <li>
                    {country.name.common}
                </li>
            ))
            }
        </ul>
    )
}

export default CountriesData