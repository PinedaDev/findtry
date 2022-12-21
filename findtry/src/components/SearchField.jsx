import React from 'react'
import { useContext } from 'react'
import { searchContext } from '../hooks/SearchContext'

const SearchField = ({ searchValue, setSearchValue }) => {

    const search = useContext(searchContext);

    const changeSearchState = () => {
        if (!search.searching) {
            search.setSearching(true)
            return
        }
        search.setSearching(!search.searching)
    }

    return (
        <>
            <input value={searchValue} onFocus={changeSearchState} onBlur={changeSearchState} onChange={(e) => setSearchValue(e.target.value)} type="search" />
        </>
    )
}

export default SearchField