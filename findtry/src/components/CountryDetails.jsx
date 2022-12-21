import React from 'react'
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router';
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
            console.log(details)
            return (
                <div>
                    <ul>
                        <li>
                            {details.name.common}
                        </li>
                        <li>
                            {details.name.official}
                        </li>
                        <li>
                            <a target="_blank" href={details.maps.googleMaps}>Show map</a>
                        </li>
                    </ul>
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