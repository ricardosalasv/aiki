import {React, useEffect} from 'react';
import Sidebar from '../components/Sidebar';
import TaskContainer from '../components/TaskContainer';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.userIsAuthenticated === 'false'){
            navigate('/login')
        }
    })

    if (localStorage.userIsAuthenticated === 'false'){
        return null;
    }
    else{
        return(
            <div className='row p-0 m-0'>
                <Sidebar />
                <div className='col content'>
                    <TaskContainer />
                </div>
            </div>
        )
    }

}

export default Home;