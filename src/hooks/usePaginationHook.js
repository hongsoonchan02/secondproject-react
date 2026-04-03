import { useState } from 'react'

const usePaginationHook = (data = [], pageSize = 5, groupSize = 5) => {

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / pageSize);
    const pagedData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    const currentGroupPage = Math.ceil(currentPage / groupSize);
    const firstGroupPageNum = (currentGroupPage - 1) * groupSize + 1;
    const lastGroupPageNum = Math.min(currentGroupPage * groupSize, totalPages);

    const handlePageChange = (pageNum) => {
        setCurrentPage(pageNum);
    }

    const goToNextPage = () => {
        setCurrentPage(Math.min(lastGroupPageNum + 1, totalPages));
    }

    const goToBeforePage = () => {
        setCurrentPage(Math.max(firstGroupPageNum - 5, 1));
    }

    return {
        currentPage,
        pagedData,
        firstGroupPageNum,
        lastGroupPageNum,
        handlePageChange,
        goToNextPage,
        goToBeforePage
    }
}

export default usePaginationHook;