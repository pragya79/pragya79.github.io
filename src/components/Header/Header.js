import React from 'react';
import {Link} from 'react-router-dom';
import image from '../../images/Taylor.png'
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <Link to="/"><div className="logo">Cine<span style={{color:"#79b8f3"}}>verse</span></div></Link>
            <div className="user-image">
                <img src={image} alt="user-profile" />
            </div>
        </div>
    );
};

export default Header;