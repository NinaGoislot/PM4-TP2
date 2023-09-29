import React from 'react';
import { Link } from 'react-router-dom';


/**
Obligatoire pour le composant : 
→ Un title ou un label
→ Une couleur de background (mettre GreenBg ou RedBg à true)
**/


function ColorButton({ link, label, title, onClick, width, height, GreenBg = false, RedBg = false}) {

    const buttonTitle = title || label;
    const w = width || "w-1/3";
    const h = height || "h-16";
    const bgColor = GreenBg === true ? 'bg-valid-color' : RedBg === true ? 'bg-error-color' : '';

    if (!label && !title) {
        console.log("Aucun label ou titre n'ont été défini.")
    }

    return (

        <button
            className={`${h} ${w} ${bgColor} text-xl`}
            title={buttonTitle}
            onClick={onClick}>

            <Link to={link} className='flex justify-center'>
                {label && <span>{label}</span>} 
            </Link>
        </button>
    )
}

export default ColorButton;