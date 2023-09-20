import React, { useContext } from "react";
import Button from "./Button";
import { GlobalContext } from '../App.jsx';
import { observer } from "mobx-react-lite";

function QuantityButton({ row = true, className, article }) {

    const { cartStore } = useContext(GlobalContext);

    const direction = row ? "row" : "col";

    const handleAddToCart = () => {
        cartStore.addCart(article);
    };

    const handleRemoveFromCart = () => {
        cartStore.removeFromCart(article);
    };


    return (

        <div className={`flex flex-${direction} justify-between items-center ${className && className}`}>
            {row === false ? <Button title="Ajouter" icon="faPlus" onClick={handleAddToCart} /> : <Button title="Retirer" icon="faMinus" onClick={handleRemoveFromCart} />}
            <p className="text-2xl p-3">{cartStore.getQuantityForArticle(article)}</p>
            {row === false ? <Button title="Retirer" icon="faMinus" onClick={handleRemoveFromCart} /> : <Button title="Ajouter" icon="faPlus" onClick={handleAddToCart} />}
        </div>

    )
}

export default observer(QuantityButton);