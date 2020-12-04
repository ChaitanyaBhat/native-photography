import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';
import SideMenu from './SideMenu';

function HeaderComponents() {
    return (
        <div className="header-container">
            <SideMenu className="side-menu" />
            <label className="header-title">NATIVE PHOTOGRAPHY</label>
            <div className="header-links">
                <NavLink to="/" exact activeStyle={ {color: "rgb(1, 66, 97)"} }>Home</NavLink>   
                <NavLink to="/about" exact activeStyle={ {color: "rgb(1, 66, 97)"} }>About</NavLink>
                <NavLink to="/contact" exact activeStyle={ {color: "rgb(1, 66, 97)"} }>Contact</NavLink>
            </div>
        </div>
    )
}

export default HeaderComponents;
