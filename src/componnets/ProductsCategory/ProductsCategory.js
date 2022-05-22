//npm i react-icons
//npm i react-bootstrap-pagination

import React from 'react';
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";
import "./style.css";
import 'reactjs-popup/dist/index.css';
import GalleryPagination from "../GalleryPagination/GalleryPagination";
import Gallery from '../Gallery/Gallery';



export default function ProductsCategory() {
  const location = useLocation();
  const pathname = location.pathname;
  const [currentCategory, setCurrentCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);
  const [totalPages, setTotalPages] = useState(0);
  const [sortById, setSortById] = useState(false);
  const [sortByDate, setSortByDate] = useState(false);
  const [order, setOrder] = useState('popular');
  const [startVisible, setStartVisible] = useState(false);
  const [endVisible, setEndVisible] = useState(true);
  const [products, setProducts] = useState([]);  //=setDataCategory
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    const CATEGORY = location.state.category;
    setCurrentCategory(CATEGORY);
  }, [pathname]);


  useEffect(() => {
    const order = `${sortByDate ? 'latest' : 'popular'}`;
    setOrder(order);
    console.log(order);
  }, [sortByDate]);
  useEffect(() => {
    const prev = (currentPage == 1) ? false : true;
    setStartVisible(prev);
    const next = (currentPage == totalPages) ? false : true;
    setEndVisible(next);

  }, [currentPage]);


  useEffect(getData, [currentCategory, currentPage, totalPages, sortById, sortByDate]);


  async function getData() {
    setLoading(true);
    await axios.get(`http://localhost:8080/store/${currentCategory}?&page=${currentPage}&per_page=${productsPerPage}&sortById=${sortById}&order=${order}`).then((res) => {
      setProducts(res.data.currentPageImgArr);
      setTotalPages(Math.floor(res.data.totalHits / productsPerPage));
      setLoading(false);
    })
      .catch(error => {
        console.log(error);
      });
  }

  function prevSlide() {
    const temp = currentPage - 1;
    if (temp >= 1 && temp <= totalPages) {
      setCurrentPage(temp);
    }
  }
  function nextSlide() {
    const temp = currentPage + 1;
    if (temp >= 1 && temp <= totalPages) {
      setCurrentPage(temp);
    }
  }



  return (<div >
    {!loading ?
      <div>
        <div className="flexClass">
          <label className="switch">
            <input className="switch__input" type="checkbox" onChange={() => setSortById(!sortById)} />
            <i className={`switch__icon ${sortById ? 'activeToggle' : ''}`}></i>
            <span className="switch__span">sort by id</span>
          </label>
          <label className="switch">
            <input className="switch__input" type="checkbox" onChange={() => setSortByDate(!sortByDate)} />
            <i className={`switch__icon ${sortById ? 'activeToggle' : ''}`}></i>
            <span className="switch__span">sort by date</span>
          </label>
        </div>
        <div className="flexClass">
          <BiChevronLeft className={`prevNextIcon ${startVisible ? 'visibleClass' : 'hideClass'}`} onClick={prevSlide} />
          <Gallery products={products} loading={loading} />
          <BiChevronRight className={`prevNextIcon ${endVisible ? 'visibleClass' : 'hideClass'}`} onClick={nextSlide} />
        </div>
        <GalleryPagination
          totalPages={totalPages}
          paginate={setCurrentPage}
          activePage={currentPage}
          itemPerPage={productsPerPage}
          prev={startVisible}
          next={endVisible}
        />
      </div> : <div></div>}</div>);
};

