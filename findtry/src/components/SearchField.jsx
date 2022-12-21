import React from 'react'
import { useEffect, useContext } from 'react';
import { searchingContext, searchValueContext } from '../hooks/SearchContext'

const SearchField = () => {

    const isSearching = useContext(searchingContext);
    const valueContext = useContext(searchValueContext)

    const changeSearchState = () => {
        if (!isSearching.searching) {
            isSearching.setSearching(true)
        }
        isSearching.setSearching(!isSearching.searching)
    }

    useEffect(() => {
        if (valueContext.searchValue != "") {
            if (isSearching.searching !== true) {
                changeSearchState()
                return
            }
            return
        }
        isSearching.setSearching(false)
    }, [valueContext.searchValue])

    return (
        <>
            <input value={valueContext.searchValue} onChange={(e) => valueContext.setSearchValue(e.target.value)} type="search" />
        </>
    )
}

export default SearchField