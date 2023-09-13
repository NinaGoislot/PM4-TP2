import React, { useState} from "react";
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
            {row === false ? <Button title="Ajouter" icon="faPlus" onClick={addOneArticle} /> : <Button title="Retirer" icon="faMinus" onClick={removeOneArticle} />}
            {quantity && quantity > 0 ? quantity : 0}
            {row === false ? <Button title="Retirer" icon="faMinus" onClick={removeOneArticle} /> : <Button title="Ajouter" icon="faPlus" onClick={addOneArticle} />}
        </div>

    )
}

export default QuantityButton;