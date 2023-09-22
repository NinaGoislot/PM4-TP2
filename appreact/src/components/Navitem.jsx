import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function NavItem({ name, link, className, iconRight = true, onClick }) {


    return (
        <li className={`h-16 py-2 px-5 text-xl bg-light-color-lightened border-custom shadow-button-shadow flex items-center ${className}`}>
            <Link className='space-x-12' onClick={onClick} to={link}>
                {iconRight === true ? <> <span className='text-xl'>{name}</span> <FontAwesomeIcon icon={faChevronRight} /></>
                    : <><FontAwesomeIcon icon={faChevronLeft} /><span className='text-xl'>{name}</span></>}
            </Link>
        </li>


    )
}


export default NavItem;