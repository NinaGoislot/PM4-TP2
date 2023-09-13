import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function NavItem({name, link }) {


    return (
        <li className='primary-background-color primary-text-color hover:secondary-text-color hover:secondary-background-color transition py-2 px-5 text-xl rounded-sm'>
            <Link className='space-x-12'  to={link}><span>{name}</span> <FontAwesomeIcon className='' icon={faArrowRight} /></Link>
            
        </li>
        

    )
}


export default NavItem;