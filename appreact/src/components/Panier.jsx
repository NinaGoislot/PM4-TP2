import React, { useContext } from 'react';
import NavItem from './Navitem';
import { GlobalContext } from '../App.jsx';
import { observer } from "mobx-react-lite";
import Bar from "./Bar";
import QuantityButton from './QuantityButton';

function Panier() {

    const { cartStore } = useContext(GlobalContext);

    //  {cart.map(article => ( <p>{article.name}</p> ))}

    const clearStorage = () => {
        cartStore.clearLocalStorage();
    };

    return (

        <div className="border-custom flex flex-col bg-light-color-lightened h-50">
            <div className="flex justify-center m-4">
                <h2 className='border-r-2 border-dark-color pr-4'>Ma commande</h2>
                <ul className='cart-classes bg-light-color-dark shadow-inner-shadow '>
                {cartStore.cart.map(article => (
                    <li key={article.id} className='w-full'>
                        <p>Nom de l'article : {article.name}</p>
                        <QuantityButton article={article}/>
                        <p>Quantité : {article.quantity}</p>
                    </li>
                ))}
            </ul>
            </div>

           

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