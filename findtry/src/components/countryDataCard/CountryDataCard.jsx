import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '@mdi/react'
import { mdiPlusCircle } from '@mdi/js'
import './style/component.css'

const CountryDataCard = ({ countryData }) => {
    const flag = countryData.flags.png
    return (
        <div className='country-data-card'>
            <img src={flag} alt={`${countryData.name.common} flag`} />

            <span className='country-card-data'>
                {countryData.name.common}
            </span>

            <span className='country-card-data'>
                {countryData.region}
            </span>

            <span className='country-card-data'>
                {countryData.population}
            </span>

            <Link to={countryData.name.common.toLowerCase()}>
                <Icon
                    path={mdiPlusCircle}
                    title="more details btn"
                    size={1}></Icon>
            </Link>
        </div>
    )
}

export default CountryDataCard