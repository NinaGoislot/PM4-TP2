import React from 'react';
import NavItem from './Navitem';


function Nav({page}) {

    return (
        <nav className='w-full flex justify-between items-center px-10'>
            <img className={`w-52 ${page}`} src="../../Noir_Logo_Musee_Lexplorateur.svg" alt="Logo du musée l'explorateur" />
            <ul className='h-16 w-48 space-y-4'>
                {page === 'expositions' ?
                    <NavItem name="Extras" link="/extras" />
                : page === 'extras' ?
                    <NavItem name="Expositions" link="/expositions" />
                : ''}
            </ul>
        </nav>
    );
}

export default Nav;