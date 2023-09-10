import React from 'react';

function QuantityButton({type}) {

    const selectedButton = type="Plus" ? "Icone +" : type="Minus" ? "Icone -" : "";

    return (

        <button>{selectedButton}</button>

    )
}

export default QuantityButton;