import React from 'react';
import NavItem from './Navitem';


function Nav() {


    return (
        <nav className='bg-light-color w-full'>
            <img className='w-52' src="../../Noir_Logo_Musee_Lexplorateur.svg" alt="" />
            <ul className='absolute top-5 right-8 h-16 w-60 space-y-4'>
                <NavItem name="ACCUEIL" link="/home" />
                <NavItem name="EXPOSITIONS" link="/expositions" />
                <NavItem name="EXTRAS" link="/extras" />
            </ul>
        </nav>
    );
}



export default Nav;