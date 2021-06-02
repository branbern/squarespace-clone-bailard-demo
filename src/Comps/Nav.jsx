import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import '../Styles/Nav.scss';

const Nav = () => {

    const location = useLocation();
    const [active, setActive] = useState(location.pathname);

    let links = 'links-white link';
    let donateLink = 'white-donate';
    let underlineColor = 'active-black';


    switch(active) {
        case '/':
            links = 'links-white link'
            donateLink = 'colored-donate'
            break;
        case '/about':
            links = 'links-white link' 
            underlineColor = 'active-white';
            break;
        case '/episodes':
            donateLink = 'colored-donate';
            break;
        case '/news':
            donateLink = 'colored-donate'
            break;
        case '/contact':
            links = 'links-white link'
            underlineColor = 'active-white';
            break;

        default: break;
    }
   
    return (
        <div className='nav-wrapper'>
            <nav className="navbar navbar-expand-lg navbar-light nav">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="/">Bailard Foundation</a>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav">
                    <li className={active === '/about' ? `${links} ${underlineColor}` : links} ><Link to="/about" onClick={() => setActive('/about')}>About</Link></li>
                    <li className={active === '/news' ? `${links} ${underlineColor}` : links} ><Link to="/news" onClick={() => setActive('/news')}>News</Link></li>
                    <li className={active === '/contact' ? `${links} ${underlineColor}` : links} ><Link to="/read" onClick={() => setActive('/read')}>Read Me</Link></li>
                    <div className={donateLink} >Take Action</div>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav;
