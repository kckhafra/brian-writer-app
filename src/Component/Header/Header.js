import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
export default class Header extends React.Component{
    render(){
        return(
            <div className="header-container">
                <div className="name-info-container">
                    <div className="name-container">
                        <div className="name">BRIAN HAWKINS</div>
                        <div className="sub-title">Comics, prose and journalism</div>
                    </div>
                    <div className="info-container">
                        {window.location.pathname=="/" ?
                        <Link to="/" className="header-links-selected"><div>WORK</div></Link>:
                        <Link to="/" className="header-links"><div>WORK</div></Link>}
                        {window.location.pathname=="/contact" ?
                        <Link to="/contact" className="header-links-selected"><div>Contact</div></Link>:
                        <Link to="/contact" className="header-links"><div>Contact</div></Link>}
                        {window.location.pathname=="/about" ?
                        <Link to="/about" className="header-links-selected"><div>ABOUT</div></Link>:
                        <Link to="/about" className="header-links"><div>ABOUT</div></Link>}
                    </div>
                </div>
            </div>
        )
    }
}