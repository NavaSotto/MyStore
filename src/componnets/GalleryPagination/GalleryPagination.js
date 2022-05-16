import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import Pagination from 'react-bootstrap/Pagination';
import { useEffect, useState } from "react";



export default function GalleryPagination(props) {
  const { activePage, itemPerPage, paginate, totalPages, prev, next } = props;

  const [pageNumbers, setPageNumbers] = useState([]);
  const [firstPage, setFirstPage] = useState(1);
  const [lastPage, setLastPage] = useState(5);


  useEffect(() => {
    if (activePage == firstPage - 1) {
    var first, last;
    first = Math.max(activePage - 4, 1);
    last = first + 4;
    setFirstPage(first);
    setLastPage(last);
    }
    else if (activePage == lastPage + 1) {
      var first, last;
      last = Math.min(totalPages, activePage + 4);
      first = last - 4;
      setFirstPage(first);
      setLastPage(last);
    }
  }, [activePage]);


  useEffect(() => {
  
    const arr = [];
    for (let i = firstPage; i <= lastPage; i++) {
      arr.push(i);
    }
    setPageNumbers(arr);
  }, [firstPage, lastPage]);

  function handleEllipsisPrev() {
    var first, last;
    first = Math.max(firstPage - 4, 1);
    last = first + 4;
    setFirstPage(first);
    setLastPage(last);
  }
  function handleEllipsisNext() {
    var first, last;
    last = Math.min(totalPages, lastPage + 4);
    first = last - 4;

    setFirstPage(first);
    setLastPage(last);
  }



  return (
    <Pagination className='paginationClass' maxpage={3} activePage={activePage} size="lg">
    {/* // itemsCountPerPage={9} totalItemsCount={450} pageRangeDisplayed={5} */}
      {/* <Pagination.First/> */}
      <Pagination.Prev onClick={(e) => paginate(activePage - 1)} disabled={!prev} />
      <Pagination.Ellipsis onClick={handleEllipsisPrev} disabled={firstPage==1} />
      {pageNumbers.map((v, i, arr) => (
        <Pagination.Item key={i} className={`${v == activePage ? 'activeButton' : ''}`} onClick={() => paginate(v)}>{v}</Pagination.Item>
      ))}
      <Pagination.Ellipsis disabled={lastPage==totalPages} onClick={handleEllipsisNext} />
      <Pagination.Next onClick={(e) => paginate(activePage + 1)} disabled={!next} />
      {/* <Pagination.Last/> */}
    </Pagination>
  );
};


