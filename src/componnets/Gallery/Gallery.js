import "./style.css";
import { useEffect, useState } from "react";
import React from "react";
import ProductDetails from "../ProductDetailes/ProductDetails";


export default function Gallery(props) {
  const { products, loading } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // if (loading) {
  //   return <h2></h2>;
  // }

  return (<div  >{!loading ?
    <div className={`gridClass`}>
      {products.map((item) => <img className={`imgClass ${isOpen ? 'blurdClass' : ''}`} id={item.id} key={item.id} src={item.src} alt="img" onClick={(e) => { setIsOpen(!isOpen); setCurrentIndex(e.target.id); }} />)}
      {isOpen ? <div className="modal">
        <button className="close" onClick={() => setIsOpen(!isOpen)}>
          &times;
        </button>
        <ProductDetails productId={currentIndex} />
      </div> : ''}
    </div> : <div></div>}
  </div>);

}



