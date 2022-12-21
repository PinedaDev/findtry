import React from 'react'
import SearchField from './SearchField'
import Icon from '@mdi/react'
import { mdiEarth } from '@mdi/js'
import { useContext } from 'react'
import { searchingContext } from '../hooks/SearchContext'
import { useLocation, useParams } from 'react-router'
import { Link } from 'react-router-dom'

const TopBar = () => {

    const location = useLocation()

    return (
        <div className='top-bar'>
            <Link to="/">
                <Icon
                    path={mdiEarth}
                    title="User Profile"
                    size={1}
                ></Icon>Findtry
            </Link>
            {location.pathname === "/" &&
                <SearchField />
            }
            {location.pathname !== "/" &&
                <Link to="/">bact to home</Link>
            }

        </div>
    )
}

export default TopBar