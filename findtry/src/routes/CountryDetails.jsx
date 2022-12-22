import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useState } from 'react';

const CountryDetails = () => {
    const location = useParams();

    const [details, setDetails] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchCountriesData = async () => {
            setLoading(true);
            const res = await axios.get(`https://restcountries.com/v3.1/name/${location.country}`);
            setDetails(res.data);
            setLoading(false);
        }
        fetchCountriesData();
    }, [])

    const countryDetails = details[0]

    const showDetails = (details) => {
        if (details !== undefined) {
            const flag = details.flags.png

            let lenguages = details.languages;
            let languagesList = []
            for (const [key, value] of Object.entries(lenguages)) {
                languagesList.push(value)
            }

            let currencies = details.currencies
            let currencyList = []
            for (const [key, value] of Object.entries(currencies)) {
                currencyList.push(value)
            }

            console.log(details)
            return (
                <div className='country-details-card'>
                    <h1>
                        {
                            details.name.common
                        }
                    </h1>
                    <div className='text-info'>
                        <img src={flag} alt={`flag of ${location}`} />
                        <p>
                            {details.name.official} is located in the {details.region}.
                            This country counts with {details.population} habitants ,
                            distributed around an area of {details.area} km<sup>2</sup>.
                            The capital city is {details.capital}
                        </p>
                    </div>
                    <div className='sub-details-grid'>
                        <div className='sub-details-container'>
                            <span>
                                Show on the map:
                            </span>
                            <a target="_blank" href={details.maps.googleMaps}>
                                {details.name.common}
                            </a>
                        </div>

                        <div className='sub-details-container'>
                            <span className='head-text'>
                                Coordinates:&nbsp;
                            </span>
                            <span>
                                lat:{details.latlng[0]}&deg;, long:{details.latlng[1]}&deg;
                            </span>
                        </div>

                        <div className='sub-details-container'>
                            <span className='head-text'>
                                Languages:
                            </span>
                            <ul>
                                {
                                    languagesList.map(language => (
                                        <li key={language}>
                                            {language}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className='sub-details-container'>
                            <span className='head-text'>
                                Currencies:
                            </span>
                            <ul>
                                {
                                    currencyList.map(currency => (
                                        <li key={currency.name}>
                                            {currency.name}-{currency.symbol}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <span>
                Loading
            </span>
        )
    }

    return (
        <div>
            {
                showDetails(countryDetails)
            }
        </div>
    )
}

export default CountryDetails