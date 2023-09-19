import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

/**
Obligatoire pour le composant : 
→ Un title ou un label
→ En l'absence d'icon, le label devient obligatoire
**/


function Button({ icon, link, label, title, onClick }) {

    const selectedIcon = icon ? fas[icon] : null;
    const buttonTitle = title || label;

    if (!label && !icon) {
        console.log("Aucune icon et aucun label n'ont été défini.")
        return null;
    }

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (

        <button
            className={`w-12 h-12 text-xl border-button bg-light-color-lightened text-primary-color rounded`}
            title={buttonTitle}
            onClick={handleClick}>

            <Link to={link}>
                {label && <span>{label}</span>}
                {selectedIcon && (
                    <FontAwesomeIcon
                        icon={selectedIcon}
                        className={label ? 'ml-1' : ''}
                    />
                )}
            </Link>
        </button>
    )
}

export default Button;