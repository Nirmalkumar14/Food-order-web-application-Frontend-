import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'


const Navbar = ({setShowLogin}) => {


const [menu,setMenu] = useState("home")
const{getTotalCartAmount}=useContext(StoreContext)


  return (
    <div className='navbar'>
     <Link to='/'>  <img src={assets.logo} alt="" className="logo" />
     </Link >
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")}  className={menu==="home"?"active":""}>home</Link>
        <a href='#explore-menu'  onClick={()=>setMenu("menu")} className={menu==="menu"?"active":"" }>menu</a>
        <a href='#' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app" ?"active":"" }>mobile-app</a>
        <a href='#footer' onClick={()=>setMenu("contact")} className={menu==="contact"    ?"active":"" }>contact</a>
        {/* <Link to='/Footer'> contact
        </Link> */}
      </ul>
      <div className='navbar-rigth'>
        <img src={assets.search_icon}/>
        <div className="navbar-search-icon">
           <Link to='/Cart'> <img  src={assets.basket_icon}/>
          
           </Link>
            <div className={getTotalCartAmount()===0?"":"dot"}>

            </div>
        </div>
        <button onClick={()=>setShowLogin(true)} >SignIn</button>
      </div>
    </div>
  )
}

export default Navbar
