import React from 'react';
import QuantityButton from '../components/QuantityButton';
import Price from './Price';

function Popup(){

return (

<div className='absolute w-full h-full primary-background-color grid justify-items-center'>
    <div className='w-9/12 flex h-max flex-wrap mt-12 border-2 border-gray-700 bg-gray-100 rounded-md'>
        <img className='basis-full border-b-4 border-gray-500' src="../../icons8-logo-480.svg" alt="" />
        <div className='flex flex-wrap basis-8/12 p-3 border-r-2 border-gray-500'>
            <h3 className='basis-full font-bold text-3xl py-2'>Ceci est un test du popup </h3>
            <p className='basis-full font-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore similique laudantium cum explicabo harum, vero ullam aut quidem ducimus quia, saepe suscipit, iste ipsa fuga reprehenderit sed porro? Atque non alias facere maxime minima, repellendus veniam. Repellat eligendi libero ea eius dolore vel ipsam, officiis atque. Quod, assumenda!</p>
        </div>
        <div className='basis-1/5'>
            <div className='flex flex-wrap flex-col'>
                <div>
                
                </div>
                <div className='text-5xl mt-6'>
                <Price cost="24$"/>
                </div>
            </div>
        </div>
    </div>
    </div>
)

    
}

export default Popup;