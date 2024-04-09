import React, { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'
const Loginpopup = ({setShowLogin}) => {

const [currState,setCurrState] = useState("Login")

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img  onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">

            {currState==="Login"?<></>:<input type='text' placeholder='Enter your Name' required/>}
            
            <input type='email' placeholder='Enter your Email' required/>
            <input type='password' placeholder='Enter your password' required/>

        </div>
        <button>{currState==="Sign up"?"Create account":"Login"}</button>

        <div className="login-popup-condition">
            <input type='checkbox'  required/>
            <p>By continuing, i agree to the terms of use & privace policy.</p>
        </div>
        {currState==="Login"
      ?<p>Create a new Account? <span    onClick={()=>setCurrState("Sign up")}>click here</span></p>: 
       <p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
        }
       
      </form>
    </div>
  )
}

export default Loginpopup
