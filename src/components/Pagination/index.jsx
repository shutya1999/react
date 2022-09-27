import styles from "./Pagination.module.scss";
import ReactPaginate from "react-paginate";

const Pagination = ({ currentPage, onChangePage }) => {
    return (
        <ReactPaginate
            className={styles.root}
            breakLabel="..."
            nextLabel=""
            onPageChange={(e) => onChangePage(e.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={3}
            previousLabel=""
            forcePage={currentPage - 1}
            renderOnZeroPageCount={null}
        />
    );
};

export default Pagination;
