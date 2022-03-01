import React from 'react';
import Navbar from '../components/Navbar';

class Home extends React.Component {
  render(){

    return(
        <div>
            <Navbar />
            <div className='row'>
            HOME
            </div>
        </div>
    )
  }
}

export default Home;