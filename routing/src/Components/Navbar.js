import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props)=>{
  return(
    <nav className='nav-wrapper blue darken-4'>

      <div className='container'>
        <Link to="/" className='brand-logo'>My brand</Link>
        <ul className='right'>

          <li><Link to="/">Home</Link></li>
        {/*  <li><Link to="/about">About</Link></li>*/}
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Navbar);
