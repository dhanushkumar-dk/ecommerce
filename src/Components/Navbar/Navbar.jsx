import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';


import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png"
import nav_dropdown from '../Assets/dropdown_icon_new.png'

const Navbar = () => {

  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>

      {/* <p>{menu}</p> */}

      <img src={nav_dropdown} onClick={dropdown_toggle} className='nav-dropdown' alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => { setMenu("shop") }} > <Link style={{ textDecoration: "none" }} to='/'>Shop</Link       >{menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("men") }}  > <Link style={{ textDecoration: "none" }} to='/mens'>Men</Link    >{menu === "men" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("women") }}> <Link style={{ textDecoration: "none" }} to='/womens'>Women</Link>{menu === "women" ? <hr /> : <></>}</li >
        <li onClick={() => { setMenu("kid") }}  > <Link style={{ textDecoration: "none" }} to='/kids'>Kids</Link   >{menu === "kid" ? <hr /> : <></>}</li >
      </ul >

      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="cart icon" /></Link>


        <div className="nav-cart-count">{getTotalCartItems}</div>
      </div>
    </div >
  )
}

export default Navbar;