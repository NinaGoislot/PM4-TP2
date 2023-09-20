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

        <div className=" w-11/12 flex flex-wrap sticky start-11 bottom-0 border-2 p-4 border-dark-color bg-light-color">
        <div className="basis-1/4 h-48 my-5 p-1 items-center mr-3">
            <div className='text-center h-36 text-2xl border-r-2 border-dark-color'>
                <p className=''>Ma commande</p>
            </div>
           
        </div>
        {cartStore.cart.map(article => (

            <div className='basis-2/3 flex flex-wrap border-1 p-2 my-5 mb-8 border-gray-400 shadow-button-shadow'>
                <div key={article.id} className='basis-full'>
                    <p className='border-b-2 border-primary-color pb-1 mb-1'>Nom de l'article : {article.name}</p>
                    <p>Quantité : {article.quantity}</p>
                </div>
                <p className='text-2xl w-full pt-4 border-t-4 pr-1/2 border-dark-color'>Total du panier : {cartStore.getTotalPrice()} €</p>
            </div>
        ))}
        <div className='basis-full flex justify-between'>
            <NavItem className='' name="Abandonner ma commande" link="/expositions" />
            <NavItem className=''  name="Confirmer ma commande" link="/expositions" />
        </div>
        <button onClick={clearStorage} className='bg-sky-500'>Vider le panier</button>
    </div>
    )
}

export default observer(Panier);