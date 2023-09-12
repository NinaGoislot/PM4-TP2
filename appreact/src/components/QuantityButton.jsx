import React from 'react';

function QuantityButton({type}) {

    const selectedButton = type && type==="plus" ? "Icone +" : type && type==="minus" ? "Icone -" : "";

    return (

        <button className='bg-zinc-500'>{selectedButton}</button>

    )
}

export default QuantityButton;