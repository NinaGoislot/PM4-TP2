import React from 'react';
import NavItem from './Navitem';
import { useLocation } from 'react-router-dom';


function Nav() {


    const location = useLocation();

    return (
        <nav className=' w-full'>
            <img className='w-52' src="../../Noir_Logo_Musee_Lexplorateur.svg" alt="Logo du musée l'explorateur" />
            <ul className='absolute top-5 right-8 h-16 w-60 space-y-4'>
            {location.pathname !== '/expositions' && (
                    <NavItem name="Expositions" link="/expositions" />
                )}
                {location.pathname !== '/extras' && (
                    <NavItem name="Extras" link="/extras" />
                )}
            </ul>
        </nav>
    );
}



export default Nav;