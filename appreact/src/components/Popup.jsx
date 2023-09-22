import React from 'react';
import QuantityButton from '../components/QuantityButton';

function Popup() {

    return (

        <div className='w-full h-full primary-background-color grid justify-items-center'>
            <div className='w-9/12 flex h-max flex-wrap mt-12 border-2 border-gray-700 bg-gray-100 rounded-md'>
                <img className='basis-full border-b-4 border-dark-color' src="../../icons8-logo-480.svg" alt="" />
                <div className='flex flex-wrap basis-8/12 p-3 border-r-2 border-dark-color'>
                    <h3 className='basis-full text-3xl py-2'>Ceci est un test du popup </h3>
                    <p className='basis-full '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore similique laudantium cum explicabo harum, vero ullam aut quidem ducimus quia, saepe suscipit, iste ipsa fuga reprehenderit sed porro? Atque non alias facere maxime minima, repellendus veniam. Repellat eligendi libero ea eius dolore vel ipsam, officiis atque. Quod, assumenda!</p>
                </div>
                <div className="w-11/12 p-4 flex flex-col bg-light-color-lightened shadow-inner-shadow">

                </div>
            </div>
        </div>
    )


}

export default Popup;