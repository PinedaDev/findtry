import { mdiMapSearch } from '@mdi/js';
import Icon from '@mdi/react';
import { useEffect, useContext } from 'react';
import { searchingContext, searchValueContext } from '../../hooks/SearchContext'
import './style/component.css';

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
        if (valueContext.searchValue !== "") {
            if (isSearching.searching !== true) {
                changeSearchState()
                return
            }
            return
        }
        isSearching.setSearching(false)
    }, [valueContext.searchValue])

    return (
        <div className='search-field'>
            <input placeholder='search a country' value={valueContext.searchValue} onChange={(e) => valueContext.setSearchValue(e.target.value)} type="search" />
            {valueContext.searchValue === "" &&
                <Icon
                    path={mdiMapSearch}
                    color="#234691"
                    size={1}>
                </Icon>}
        </div>
    )
}

export default SearchField;