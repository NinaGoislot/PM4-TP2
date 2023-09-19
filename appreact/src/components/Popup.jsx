import React from 'react';
import QuantityButton from '../components/QuantityButton';
import Price from './Price';

function Popup(){

return (

<div className='absolute w-screen h-screen primary-background-color p-5'>
    <div className='w-9/12 absolute start-1/ flex flex-wrap border-2 border-gray-700 bg-gray-100 rounded-md'>
        <img className='basis-full border-b-4 border-gray-500' src="../../icons8-logo-480.svg" alt="" />
        <div className='flex flex-wrap basis-3/4 p-3 border-r-2 border-gray-500'>
            <h3 className='basis-full font-bold text-2xl'>Ceci est un test du popup </h3>
            <p className='basis-full font-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore similique laudantium cum explicabo harum, vero ullam aut quidem ducimus quia, saepe suscipit, iste ipsa fuga reprehenderit sed porro? Atque non alias facere maxime minima, repellendus veniam. Repellat eligendi libero ea eius dolore vel ipsam, officiis atque. Quod, assumenda! Eveniet iure similique numquam officiis itaque voluptatum reiciendis cupiditate ab, dolor dolorem minima omnis. Aspernatur molestiae, quo cum neque reprehenderit eveniet esse beatae totam, commodi atque corporis et quia mollitia iusto illum ducimus ipsum fugit dolorum. Minima nostrum voluptates corrupti, quasi quibusdam velit eum deleniti tenetur in veniam dolorum placeat rerum reprehenderit? Voluptatibus tempora commodi doloremque accusantium voluptates ratione reiciendis error omnis dolore provident fugiat, blanditiis eos! Rerum laboriosam odio atque est, dolores debitis saepe quod eum repellendus ipsa voluptatibus rem at alias voluptate accusantium obcaecati sed? Harum quia sint architecto necessitatibus numquam quidem vitae. Deserunt quisquam libero magni quaerat, quod modi, suscipit dolores repudiandae accusamus voluptas minus nisi possimus rerum quis laudantium doloremque tempora unde eius vel eum quas sed quae et. Culpa autem explicabo dolore expedita aliquid? Praesentium eos esse velit repudiandae aliquid, quae sequi rem vel omnis perspiciatis nobis minus exercitationem minima dicta quod quibusdam, quasi eligendi! Provident, doloremque!</p>
        </div>
        <div className='basis-1/5'>
            <div className='flex flex-wrap flex-col'>
                <div>
                
                </div>
                <div className='absolute bottom-5 right-12 text-6xl'>
                <Price cost="24$"/>
                </div>
            </div>
        </div>
    </div>
    </div>
)

    
}

export default Popup;