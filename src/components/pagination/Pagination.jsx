import ReactPaginate from 'react-paginate';
import './style/component.css';

const Pagination = ({ countriesPerPage, totalCountries, handlePageClick }) => {

    const pageCount = Math.ceil(totalCountries / countriesPerPage)

    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            breakClassName="brake-dots"
            pageCount={pageCount}
            previousLabel="previous"
            renderOnZeroPageCount={null}
            containerClassName="pagination-container"
            activeClassName="active-page"
            activeLinkClassName="active-page"
            previousLinkClassName="previous-btn"
            nextLinkClassName="next-btn"
            pageLinkClassName="page-link"
            disabledLinkClassName="disabled-btn"
        />
    )
}

export default Pagination;