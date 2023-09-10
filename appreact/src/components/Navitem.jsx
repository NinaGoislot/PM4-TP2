import React from 'react';
import { Link } from 'react-router-dom';

function NavItem({name, link }) {


    return (
        <li>
            <Link to={link}><span>{name}</span></Link>
        </li>

    )
}

export default NavItem;