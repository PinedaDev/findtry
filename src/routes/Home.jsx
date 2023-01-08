import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import CountriesData from '../components/countriesData/CountriesData';
import Pagination from '../components/pagination/Pagination';
import { searchingContext, searchValueContext } from '../hooks/SearchContext';
import '../styles/routesStyle/home.css';

const Home = () => {

    const [countriesData, setCountriesData] = useState([]);
    const [, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(5);

    const valueContext = useContext(searchValueContext)
    const searchContex = useContext(searchingContext)
    const filteredCountriesData = countriesData.filter(country =>
        country.name.common.toLowerCase().includes(valueContext.searchValue.toLowerCase()))

    useEffect(() => {
        const fetchCountriesData = async () => {
            setLoading(true);
            const res = await axios.get('https://restcountries.com/v3.1/all');
            let sortedData = res.data.sort((country1, country2) => {
                if (country1.name.common.toLowerCase() < country2.name.common.toLowerCase()
                ) return -1;
                else {
                    return 1;
                }
            })
            setCountriesData(sortedData);
            setLoading(false);
        }

        fetchCountriesData();
    }, [])

    //Get current post
    const indexOfLastCountryData = currentPage * countriesPerPage;
    const indexOfFirstCountryData = indexOfLastCountryData - countriesPerPage;
    const currentCountriesData = countriesData.slice(indexOfFirstCountryData, indexOfLastCountryData);

    const changePage = (event) => {
        const newPage = (event.selected % countriesData.length) + 1;
        setCurrentPage(newPage);
    }

    return (
        <div>
            <div className='categories-div'>
                <ul>
                    <li>Flag</li>
                    <li>Name</li>
                    <li>Region</li>
                    <li>Population</li>
                </ul>
            </div>
            <CountriesData filteredData={filteredCountriesData} currentCountriesData={currentCountriesData} />
            {searchContex.searching === false &&
                <Pagination
                    handlePageClick={changePage}
                    countriesPerPage={countriesPerPage}
                    totalCountries={countriesData.length} />}
        </div>
    );
}

export default Home;
