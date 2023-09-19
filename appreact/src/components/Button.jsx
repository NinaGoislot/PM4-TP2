import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

function Button({ icon, link, label, title, onClick }) {

    const selectedIcon = icon ? fas[icon] : null;
    const buttonTitle = title || label;

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (

        <button
            className={`w-12 h-12 text-sm font-semibold bg-sky-300 text-[#3A2D2E] hover:bg-[#B69288] hover:text-[#F9EEE4] rounded transition duration-00 transform`}
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