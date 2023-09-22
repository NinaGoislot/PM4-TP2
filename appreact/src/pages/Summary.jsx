import { GlobalContext } from '../App.jsx';
import { observer } from "mobx-react-lite";
import React, { useContext, useState } from 'react';
import QuantityButton from '../components/QuantityButton';
import Bar from "../components/Bar";
import NavItem from '../components/Navitem';

function Summary({ }) {
    const { cartStore } = useContext(GlobalContext);




    return (
        <>
            <main className='bg-light-color flex  justify-center items-center'>


                <div className='p-20 basis-full'>
                    <div className=''>
                        <h1 className='text-5xl'>Panier</h1>

                        <ul className='cart-classes basis-2/3 flex flex-wrap p-4 my-5'>
                            {cartStore.cart.map(article => (
                                <li key={article.id} className='w-full pb-1 mb-1 flex items-center justify-between'>
                                    <p className='text-standard-size border-l-[3px] border-b-[3px] pr-40 pl-4 text-left border-primary-color'>{article.name}</p>
                                    <div className='flex items-center justify-between w-2/5'>
                                        <QuantityButton article={article} small={true} />
                                        <Bar row={false} height="h-12" />
                                        <p>Quantité : {article.quantity}</p>
                                    </div>
                                </li>
                            ))}
                            <div className='flex justify-between items-center w-full border-t-4 border-dark-color  pt-4'>

                                <p className='text-2xl'>Prix total</p>
                                <p className='text-2xl'>{cartStore.getTotalPrice()} $</p>

                            </div>
                            
                            <div className="flex justify-between w-full mt-6">
                                
                            <NavItem name="Retour" link="/Extras"iconRight={false} />
                            <NavItem name="Payer" link="/Paiement" />
                            </div>



                        </ul>
                    </div>
                </div>


            </main>
        </>
    )


}

export default observer(Summary);