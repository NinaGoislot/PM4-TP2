import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons';
import { faMoneyBill1 } from '@fortawesome/free-regular-svg-icons';

function PaiementCard({icon, link, text, height = "h-full", width = "w-1/2", className}) {

    /** Nous posssédons un compte gratuit de fontAwesome. 
     * Nous sommes donc limités dans l'utilisation d'icones sous la forme regular.
     * Sur ce composant nous importons donc directement l'objet icone depuis la bibliotèque pour pouvoir l'utiliser
    */

    const choosenIcon = icon === "fa-credit-card" ? faCreditCard : icon === "fa-money-bill-1" ? faMoneyBill1 : '';
    

    return (
        <Link className={`flex flex-col ${!icon ? 'justify-center' : 'justify-between'} ${height} ${width} py-12 px-12 bg-light-color-lightened border-custom shadow-card-shadow ${className}`} to={link}>
            {icon &&  <FontAwesomeIcon icon={choosenIcon} className="w-full paiement-icon text-primary-color"/>}
            <h2 className="text-5xl italic text-center">{text}</h2>
        </Link>
  
    )
}

export default PaiementCard;