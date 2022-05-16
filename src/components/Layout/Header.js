import React from 'react'
import logo from '../../assests/images/Logo.png'
import '../../styles/Header.scss'
import insta from '../../assests/images/insta.svg'
import facebook from '../../assests/images/facebook.svg'

const Header = () => {
  return (
    <div className='header'>
        <div className="logo">
           <img src={logo} alt="logo" />
        </div>
        <div className='nav_items'>
            <div className="navbar">
              <a href="">Poznaj przestrzen</a>
              <a href="">Oferta</a>
              <a href="">Lokalizacja</a>
              <a href="">Wtasne biuro</a>
              <a href=""> Kontakt</a> 
            </div>
            <div className="social">
              <a href="#"><img src={facebook} alt="facebook" /></a>
              <a href="#"><img src={insta} alt="insta" /></a>
            </div>
        </div>
        
    </div>
  )
}

export default Header