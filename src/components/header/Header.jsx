import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css';
import axios from 'axios';
import './category.css';
import { useSelector } from 'react-redux';


export const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [category, setCategory] = useState([])
  const cardProduct=useSelector(state=>state.cart)

  // const toggleDropdown = () => {
  //   setDropdownOpen(!dropdownOpen);
  // };


  const toggleDropdown = () => {
    setDropdownOpen(prevState => {
      console.log("Dropdown state:", !prevState); // Check state change
      return !prevState;
    });
  };
  
  console.log("Categories:", category); // Check categories data
  



  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories")
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);


  return (
    <>
      <header className="header-container">
        <div className="logo">
          <Link to="/" className="logo-link">
            <h1 className="logo-text">JTrendsHub</h1>
          </Link>
        </div>
        <nav className="nav-links">
          <Link to="/" className="nav-link" style={{ color: 'white' }}>Home</Link>
          <div className="nav-link dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <span className="nav-link" style={{ color: 'white' }}>Categories</span>
            {dropdownOpen && (
              <ul className="dropdown-menu" >
                {category.length > 0 ? (
                  category.map((item, index) => (
                    <li key={index}>
                      <Link className="dropdown-item" to={`/?categoryname=${item}`} style={{ textTransform: "capitalize" }}>
                        {item}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li>No categories available</li>
                )}
              </ul>
            )}
          </div>
          <Link to="/about" className="nav-link" style={{ color: 'white' }}>About Us</Link>
          <Link to="/contact-us" className="nav-link" style={{ color: 'white' }}>Contact</Link>
        </nav>
        <div className="header-buttons">
         
       <Link to="/cart">   
       <button className="cart-btn">Cart &#128722; </button>
       </Link>
       <Link to="/login"> 
          <button className="login-btn">Login</button>
        </Link>
        </div>
      </header>


    </>
  )
}
