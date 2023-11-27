import React, { useContext } from 'react'
import './Navbar.css'
import { useState } from 'react'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

export const Navbar = () => {

    const [menu,setMenu] = useState("SHOP");
    const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>

        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>PLANtIFY</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("SHOP")}}><Link style={{ textDecoration: 'none'}} to='/'>SHOP</Link>{menu==="SHOP"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Medicinal Plants")}}><Link style={{ textDecoration: 'none'}} to='/Medicinal Plants'>Medicinal Plants</Link>{menu==="Medicinal Plants"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Decor Plants")}}><Link style={{ textDecoration: 'none'}} to='/Decor Plants'>Decor Plants</Link>{menu==="Decor Plants"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Indoor plants")}}><Link style={{ textDecoration: 'none'}} to='/Indoor plants'>Indoor plants</Link>{menu==="Indoor plants"?<hr/>:<></>}</li>
        </ul>

        <ul className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </ul>
    </div>
  )
}

export default Navbar