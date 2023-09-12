import React from 'react';
import NavItem from './Navitem';


function Nav() {


    return (
        <nav className='bg-stone-500'>
            <img className='w-52' src="../../icons8-logo-480.svg" alt="" />
            <ul className='absolute top-5 right-8 h-16 w-60 space-y-4'>
                <NavItem name="ACCUEIL" link="/home" />
                <NavItem name="EXPOSITIONS" link="/expositions" />
                <NavItem name="EXTRAS" link="/extras" />
            </ul>
        </nav>
    );
}



export default Nav;