import React, { useContext } from "react";
import Button from "./Button";
import { GlobalContext } from '../App.jsx';
import { observer } from "mobx-react-lite";

function QuantityButton({ row = true, className, article, small }) {

    const { cartStore } = useContext(GlobalContext);

    const direction = row ? "row" : "col";
    const disabled = cartStore.cart.length > 0 ? false : true;

    const handleAddToCart = () => {
        cartStore.addCart(article);
    };

    const handleRemoveFromCart = () => {
        cartStore.removeFromCart(article);
    };


    return (

        <div className={`flex flex-${direction} justify-between items-center ${className && className}`}>
            {row === false ? <Button title="Ajouter" icon="faPlus" onClick={handleAddToCart} small={small && small === true ? true : false}/> : <Button title="Retirer" icon="faMinus" onClick={handleRemoveFromCart} small={small && small === true ? true : false} disabled={disabled} />}
            <p className="text-2xl p-3">{cartStore.getQuantityForArticle(article)}</p>
            {row === false ? <Button title="Retirer" icon="faMinus" onClick={handleRemoveFromCart} small={small && small === true ? true : false} disabled={disabled}/> : <Button title="Ajouter" icon="faPlus" onClick={handleAddToCart} small={small && small === true ? true : false}/>}
        </div>

    )
}

export default observer(QuantityButton);