import {React, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './resources/logo_aiki.svg'
import SidebarButton from './SidebarButton';

const Sidebar = () => {
    return(
        <div className="col-2 sidebar">
            <div className="row">
                <div className="col">
                    <img className="m-4 sidebar_logo" src={logo} alt="logo_aiki" />
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col">
                    <ul className="sidebar-menu">
                        <SidebarButton name="Home" />
                        <SidebarButton name="Logout" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;