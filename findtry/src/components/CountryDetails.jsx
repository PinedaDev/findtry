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
            console.log(countryDetails)
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
                            {details.name.official} is located in {details.region}.
                            This country count with {details.population} habitants ,beeing their
                            official or every day language
                        </p>
                    </div>
                    <div>

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