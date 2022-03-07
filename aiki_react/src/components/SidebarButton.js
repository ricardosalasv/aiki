import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axiosInstance from '../axios';

const SidebarButton = ({name}) => {

    const navigate = useNavigate();
    let route = "/";
    let isLogout = false;

    if (name.toLowerCase() != "home"){
        route += name.toLowerCase();
    }
    
    if (name.toLowerCase() == "logout") {
        route = "login";
        isLogout = true; 
    }

    const Logout = () => {
    
        localStorage.setItem('userIsAuthenticated', false);
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        axiosInstance.defaults.headers['Authorization'] = null;
    
        console.log("User logged out.")
        
        navigate('/login');
    }

    return (
        <Link className='sidebar_button' 
        to={route} 
        onMouseUp={isLogout ? Logout : null} >{name}</Link>
    )
}

export default SidebarButton;