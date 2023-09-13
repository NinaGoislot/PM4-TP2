import React, { useState, useContext } from "react";
import Button from "./Button";

function QuantityButton({ row = true }) {

    const [quantity, setQuantity] = useState(0);

    const direction = row ? "row" : "col";

    const addOneArticle = () => {
        setQuantity(quantity + 1);
    };

    const removeOneArticle = () => {
        setQuantity(quantity - 1);
    };

    return (

        <div className={`flex flex-${direction} justify-between items-center`}>
            <Button title="Ajouter" icon="faPlus" onClick={addOneArticle} />
            {quantity && quantity > 0 ? quantity : 0}
            <Button title="Retirer" icon="faMinus" onClick={removeOneArticle} />
        </div>

    )
}

export default QuantityButton;