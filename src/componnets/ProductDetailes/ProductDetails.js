import { useContext, useEffect, useState } from "react";
import "./style.css";
import axios from "axios";


export default function ProductDetails(props) {

  const [data, setData] = useState({});
  const { productId } = props;
  useEffect(getData, [productId]);
  async function getData() {
    await axios.get(`http://localhost:8080/store/category/${productId}`).then((res) => {
      setData(res.data);
    })
      .catch(error => {
        console.log(error);
      });
  }
 

  return (
    <div >
      {Object.entries(data).map(([key, value]) => { return (<div className="line"><span className="keyClass">{key}:</span><span className="valueClass">{value.toString()}</span></div>); })}
    </div>
  );
}


