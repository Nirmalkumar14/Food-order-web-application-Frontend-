import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
           <img src={assets.logo} />
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem inventore, aliquid, error nobis cumque enim saepe tempora architecto obcaecati praesentium atque magnam illum, omnis qui voluptatum aperiam optio assumenda consequatur?</p>
           <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon}  alt="" />
            <img src={assets.linkedin_icon} alt="" />
           </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
             <li>Home</li>
             <li>About Us</li>
             <li>Delivery</li>
             <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-rigth">
           <h2>
            GET IN TOUCH
           </h2>
           <ul>
            <li>+91 9856231478</li>
            <li>cantact@me.in</li>
           </ul>
        </div>
      </div>
      <hr/>
    </div>
  )
}

export default Footer
