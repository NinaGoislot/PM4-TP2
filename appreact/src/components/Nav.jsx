import React from 'react';
import NavItem from './Navitem';


function Nav() {


    return (
        <nav>
            <ul>
                <NavItem name="Accueil" link="/home" />
                <NavItem name="Expositions" link="/expositions" />
                <NavItem name="Extras" link="/extras" />
            </ul>
        </nav>
    );
}

export default Nav;