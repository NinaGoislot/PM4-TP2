import React from 'react';
import NavItem from './Navitem';
import { useNavigate } from 'react-router-dom';


function NavPaiement() {
    const navigate = useNavigate();

    // Revenir à la page précédente
   const handleRetour = () => {
       navigate(-1);
   };

    return (
        <nav className='w-full flex items-center px-10'>
            <ul className='h-16 w-40'>
               <NavItem name="Retour" onClick={handleRetour} iconRight={false} />
            </ul>
        </nav>
    );
}

export default NavPaiement;