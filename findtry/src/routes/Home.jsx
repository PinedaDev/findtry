import axios from 'axios';
import { useState, useEffect, useMemo } from 'react';
import { searchContext } from '../hooks/SearchContext';
import CountriesData from '../components/CountriesData';
import Pagination from '../components/Pagination';
import SearchField from '../components/SearchField';
import { Outlet } from 'react-router';

const Home = () => {

    const [countriesData, setCountryData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setcountriesPerPage] = useState(5);

    const [searching, setSearching] = useState(false);
    const provideSearchState = useMemo(() => ({ searching, setSearching }), [searching, setSearching])
    const [searchValue, setSearchValue] = useState("")

    const filteredCountriesData = countriesData.filter(country => {
        return country.name.common.toLowerCase().includes(searchValue.toLowerCase())
    })

    useEffect(() => {
        const fetchCountriesData = async () => {
            setLoading(true);
            const res = await axios.get('https://restcountries.com/v3.1/all');
            setCountryData(res.data);
            setLoading(false);
        }

        fetchCountriesData();
    }, [])



    //Get current post
    const indexOfLastCountryData = currentPage * countriesPerPage;
    const indexOfFirstCountryData = indexOfLastCountryData - countriesPerPage;
    const currentCountriesData = countriesData.slice(indexOfFirstCountryData, indexOfLastCountryData)

    const changePage = (event) => {
        const newPage = (event.selected % countriesData.length) + 1;
        console.log(`User requested page ${newPage}`)
        setCurrentPage(newPage);
    }

    return (
        <searchContext.Provider value={provideSearchState}>
            <div>
                <h1>Findtry</h1>
                <SearchField searchValue={searchValue} setSearchValue={setSearchValue} />
                <CountriesData filteredData={filteredCountriesData} currentCountriesData={currentCountriesData} />
                <Pagination
                    handlePageClick={changePage}
                    countriesPerPage={countriesPerPage}
                    totalCountries={countriesData.length} />
            </div>
        </searchContext.Provider>
    );
}

export default Home;
