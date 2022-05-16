import "./style.css";
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from "react";

export default function Navbar() {
  const categories = ["sweets", "stationery", "fruits", "vegetables"];

  const [categoriesList, setCategoriesList] = useState([]);
  const [navButton, setNavButton] = useState(false);
  const [  currentCategory, setCurrentCategory] = useState('');


  useEffect(getCategoriesList, []);
  function getCategoriesList() {
    setCategoriesList(categories);
  }


  if (!categoriesList) return "loading";
  else
    return <div  >
      <div >
        <button onClick={() => setNavButton(!navButton)} className="btnClass"  >open categories list</button>
      </div>
      <ul className={`Navbar ${navButton ? 'visibleClass' : 'hideClass'}`}>
        {categoriesList.map((category) => (
          <div key={category}>
            <NavLink
              key={category}
              id={category}
              className={`categoriesNavLink ${(currentCategory==category)?'clickNavLink':''}`}
              to={{ pathname: `/ProductsCategory/${category}` }}
              state={{ "category": `${category}` }}
              onClick={(e)=>{setCurrentCategory(e.target.id)}}
            >
              {category}
            </NavLink>
          </div >
        ))}
      </ul>
    </div>;

}

