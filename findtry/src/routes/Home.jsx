import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import CountriesData from '../components/CountriesData';
import Pagination from '../components/Pagination';
import { searchValueContext } from '../hooks/SearchContext';

const Home = () => {

    const [countriesData, setCountryData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setcountriesPerPage] = useState(5);

    const valueContext = useContext(searchValueContext)
    const filteredCountriesData = countriesData.filter(country => {
        return country.name.common.toLowerCase().includes(valueContext.searchValue.toLowerCase())
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
        <div>
            <CountriesData filteredData={filteredCountriesData} currentCountriesData={currentCountriesData} />
            <Pagination
                handlePageClick={changePage}
                countriesPerPage={countriesPerPage}
                totalCountries={countriesData.length} />
        </div>
    );
}

export default Home;
