import React from 'react';
import '../../App/App.css';
import MenuItem from '../MenuItem'
import HeaderLogo from '../HeaderLogo';
import DetectLang from '../DetectLang';
import TextContent from '../../App/textContent';

let pageLang = DetectLang();

function Nav() {
    return (
        <nav className="nav">
            <HeaderLogo path={`/#lang=${pageLang}`}/>
            <ul className="nav-links">
                <MenuItem text={TextContent[pageLang].home} path={`/#lang=${pageLang}`} />
            </ul>
        </nav>
    );
}

export default Nav;