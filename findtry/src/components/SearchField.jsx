import React from 'react'
import { useEffect, useContext, useRef } from 'react';
import { searchContext } from '../hooks/SearchContext'

const SearchField = ({ searchValue, setSearchValue }) => {

    const search = useContext(searchContext);
    const searchFiel = useRef()

    const changeSearchState = () => {
        if (!search.searching) {
            search.setSearching(true)
        }
        search.setSearching(!search.searching)
    }

    useEffect(() => {
        if (searchValue != "") {
            if (search.searching !== true) {
                changeSearchState()
                return
            }
            return
        }
        search.setSearching(false)
    }, [searchValue])

    return (
        <>
            <input ref={searchFiel} value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="search" />
        </>
    )
}

export default SearchField