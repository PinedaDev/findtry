import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({ countriesPerPage, totalCountries, handlePageClick }) => {

    const pageCount = Math.ceil(totalCountries / countriesPerPage)

    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
        />
    )
}

export default Pagination