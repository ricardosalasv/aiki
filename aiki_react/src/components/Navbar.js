import React from 'react';
import NavbarButton from './NavbarButton';
import { Routes, Route, Link } from 'react-router-dom';
import logo from './resources/logo_aiki.svg'
import menu_img from './resources/menu.svg'

const Navbar = () => {

    return(
        <div className='row'>
            <div className="navbar navbar-expand-lg">
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt="logo_aiki" height={65} />
                </Link>
                {/* <Link to="/login" className="navbar-brand">
                    <img src=src={logo} alt="logo_aiki" height={65} />
                </Link> */}

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <img src={menu_img} alt="menu_icon" height={50} />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/login" className="nav-link active" aria-current="page">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/register" className="nav-link leftBorder">Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default Navbar;