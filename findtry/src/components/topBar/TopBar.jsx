import React from 'react'
import SearchField from '../searchField/SearchField'
import Icon from '@mdi/react'
import { mdiEarth } from '@mdi/js'
import { mdiHome } from '@mdi/js'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import './style/component.css'

const TopBar = () => {

    const location = useLocation()

    return (
        <div className='top-bar'>
            <Link className='logo' to="/">
                <Icon
                    path={mdiEarth}
                    title="logo icon"
                    color="#234691"
                    size={1}
                ></Icon>
                <span className='main-color'>
                    Findtry
                </span>
            </Link>
            {location.pathname === "/" &&
                <SearchField />
            }
            {location.pathname !== "/" &&
                <Link to="/">
                    <Icon
                        path={mdiHome}
                        size={2}
                        color="#234691">

                    </Icon>
                </Link>
            }

        </div>
    )
}

export default TopBar