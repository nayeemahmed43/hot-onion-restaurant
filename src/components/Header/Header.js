import React from 'react';
import logo2 from '../../fakeData/logo2.png';
import path1 from '../../fakeData/ICON/Path 1.png';
import bannerbackground from '../../fakeData/bannerbackground.png'
import './Header.css';
const Header = () => {
    return (
        <div>
           <nav className="navbar navbar-light bg-light">
                <img src={logo2} width="200" className="d-inline-block align-top" alt="" />

                <div className="nav">
                    <img src={path1} alt=""/>
                    <button>log in</button>
                    <button id="signupButton">Sign up</button>
                </div>
            </nav>
            
            <div>
                <img id="banner" src={bannerbackground} alt=""/>
            </div>
            
            
            
            
        </div>
    );
};

export default Header;