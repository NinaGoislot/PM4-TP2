import { GlobalContext } from '../App.jsx';
import { observer } from "mobx-react-lite";
import React, { useContext, useState } from 'react';
import QuantityButton from '../components/QuantityButton';
import Bar from "../components/Bar";
import NavItem from '../components/Navitem';
import NavigationButton from '../components/NavigationButton.jsx';

function Summary({ }) {
    const { cartStore } = useContext(GlobalContext);




    return (
        <main className='bg-light-color flex flex-col justify-between py-32 px-10'>
            <ul className='flex'>
                <NavItem name="Retour" link="/Extras" iconRight={false} className='w-40' />
            </ul>
            <div className='flex justify-center w-ful'>
                <div className='w-10/12'>
                    <h1 className='text-5xl'>Panier</h1>
                    <ul className='basis-2/3 flex flex-wrap px-6 mt-10'>
                        {cartStore.cart.map(article => (
                            <li key={article.id} className='w-full pb-1 mb-1 flex items-center justify-between pb-4'>
                                <div className="flex justify-between flex-1">
                                    <div className='border-l-2 border-b-2 w-3/5 border-primary-color flex items-center'>
                                        <p className='text-standard-size px-2 border-primary-color'>{article.name}</p>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <QuantityButton article={article} small={true} />
                                        <Bar row={false} height="h-5" className='px-2' />
                                    </div>
                                </div>
                                <p className='w-16 ml-4'>{article.price} $</p>
                            </li>
                        ))}
                    </ul>
                    <Bar width="w-full" height="h-2" className="w-full mb-4" />
                    <ul className='flex flex-col flex-wrap p-6 my-5 max-h-64'>
                        <li>
                            <div className='flex justify-between flex-1'>
                                <div className='flex justify-between w-36'>
                                    <p>TPS</p>
                                    <p className='text-[#565656]'>+5%</p>
                                </div>
                                <div className="flex justify-center items-center">
                                    <Bar row={false} height="h-5" className='px-2' />
                                    <p className='w-16 ml-4'>{cartStore.getTPS()} $</p>
                                </div>
                            </div>
                            <Bar width="w-full" className="my-2" color='bg-primary-color' />
                        </li>
                        <li>
                            <div className='flex justify-between flex-1'>
                                <div className='flex justify-between w-36'>
                                    <p>TVQ</p>
                                    <p className='text-[#565656]'>+9,975%</p>
                                </div>
                                <div className="flex justify-center items-center">
                                    <Bar row={false} height="h-5" className='px-2' />
                                    <p className='w-16 ml-4'>{cartStore.getTVQ()} $</p>
                                </div>
                            </div>
                            <Bar width="w-full" className="my-2" color='bg-primary-color' />
                        </li>
                    </ul>
                    <div className='flex justify-between items-center w-full pt-4'>
                        <p className='text-2xl'>Prix total</p>
                        <p className='text-2xl'>{cartStore.getCartTotalWithTaxes()} $</p>
                    </div>
                    <div className="flex justify-end w-full mt-6">
                        <NavigationButton label="Payer" link="/Paiement" GreenBg={true} width='w-36' />
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full mt-6">
                <NavigationButton label="Abandonner ma commande" link="/Paiement" RedBg={true} />
            </div>
        </main>
    )


}

export default observer(Summary);