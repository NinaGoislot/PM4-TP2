import React, { useContext } from 'react';
import NavItem from './Navitem';
import { GlobalContext } from '../App.jsx';
import { observer } from "mobx-react-lite";
import Bar from "./Bar";

function Panier() {

    const { cartStore } = useContext(GlobalContext);
  
    //  {cart.map(article => ( <p>{article.name}</p> ))}

    const clearStorage = () => {
        cartStore.clearLocalStorage();
    };
    
    return (

        <div className="border-dashed border-2 border-sky-500">
            <div className="flex">
                <div>Mon panier</div>
               
            </div>
            {cartStore.cart.map(article => (
                <div key={article.id}>
                    <p>Nom de l'article : {article.name}</p>
                    <p>Quantité : {article.quantity}</p>
                </div>
            ))}
            <p>Total du panier : {cartStore.getTotalPrice()} €</p>
            <div>
                <NavItem name="Abandonner ma commande" link="/expositions" />
                <NavItem name="Confirmer ma commande" link="/expositions" />
            </div>
            <button onClick={clearStorage} className='bg-sky-500'>Vider le panier</button>
        </div>

    )
}

export default observer(Panier);