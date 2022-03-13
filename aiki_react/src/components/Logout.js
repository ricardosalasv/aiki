import React, { useEffect } from 'react';
import axiosInstance from '../axios';
import { useNavigate, Link } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const logoutFunc = () => {
        localStorage.setItem('userIsAuthenticated', false);
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        axiosInstance.defaults.headers['Authorization'] = null;

        console.log("User logged out.")
        
        navigate('/login');
    };

    return (
        <Link to="/login" onMouseUp={logoutFunc} className="nav-link active" aria-current="page">Logout</Link>
    )
}

export default Logout;