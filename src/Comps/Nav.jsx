import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import '../Styles/Nav.scss';

const Nav = () => {

    const location = useLocation();
    const [active, setActive] = useState(location.pathname);
    const [showDropdown, setShowDropdown] = useState(false);

    let links = 'links-white link';
    let actionLink = 'white-action action';
    let underlineColor = 'active-black';


    switch(active) {
        case '/':
            links = 'links-white link'
            actionLink = 'colored-action action'
            break;
        case '/about':
            links = 'links-white link' 
            underlineColor = 'active-white';
            break;
        case '/episodes':
            actionLink = 'colored-action action';
            break;
        case '/news':
            actionLink = 'colored-action action'
            links = 'links-black link'
            break;
        case '/readme':
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
                    <div onMouseEnter={() => setShowDropdown(true)}
                        onMouseLeave={() => setShowDropdown(false)}>

                        <li className={links}>
                            <a>About</a>
                        </li>

                        <div className={showDropdown ? `dropdown` : 'hide'}>
                            <ul className="dropdown-ul">
                                <li className="minilink"> <Link to="/news" onClick={() => setActive('/news')}>What we do</Link></li>
                                <li className="minilink"> <Link to="/news" onClick={() => setActive('/news')}>Projects</Link></li>
                                <li className="minilink"> <Link to="/news" onClick={() => setActive('/news')}>Partners</Link></li>
                                <li className="minilink"> <Link to="/news" onClick={() => setActive('/news')}>Contact </Link></li>
                            </ul>
                        </div>
                    </div>
                
               
                    <li className={active === '/news' ? `${links} ${underlineColor}` : links} ><Link to="/news" onClick={() => setActive('/news')}>News</Link></li>
                    <li className={active === '/readme' ? `${links} ${underlineColor}` : links} ><Link to="/readme" onClick={() => setActive('/readme')}>Read Me</Link></li>
                    <div className={actionLink} >Take Action</div>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav;
