import {React, useEffect} from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.userIsAuthenticated === 'false'){
            navigate('/login')
        }
    })

    return(
        <div>
            <Navbar />
            <div className='row'>
            HOME
            </div>
        </div>
    )

}

export default Home;