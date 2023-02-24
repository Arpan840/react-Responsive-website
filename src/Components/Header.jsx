import React from 'react'
import { Link } from 'react-router-dom'
import "./Style/Header.scss"
import {HashLink} from "react-router-hash-link"



const Header = () => {
  return (
    <div>
      <nav>
      <h3>Tech<span style={{color:'brown'}}>Star</span></h3>
        <main>
       
       <Link to="/" aria-current='page' className="home">HOME</Link>
       <HashLink to="/#about" className="about">ABOUT</HashLink>
       <Link to="/contact" className="contact">CONTACT</Link>
       <HashLink to="/#brands" className="brands">BRANDS</HashLink>
       <Link to="/services" className='services'>SERVICES</Link>
       </main>
      </nav>
    </div>
  )
}

export default Header
