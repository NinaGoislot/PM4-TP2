import Article from '../components/Article';
import React, { useContext, useState } from 'react';
import Nav from '../components/Nav'
import { GlobalContext } from '../App.jsx';
import { observer } from 'mobx-react-lite';
import Panier from '../components/Panier';
import Button from './Button';
import QuantityButton from './QuantityButton';
import Bar from './Bar';

function ArticleModal({ article, onClose }) {

  // Quitter la pop en cliquant en dehors
  const handleOutsideClick = (e) => {

    if (e.target.classList.contains('popup-background')) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 popup-background" onClick={handleOutsideClick}>
      <div className="bg-light-color-lightened w-4/5 h-3/5 rounded-lg shadow-lg p-12">

        <figure className="flex h-2/5">
          <img className="w-full h-auto object-cover" src={`../../pictures/${article.pictures[0]}`} />
        </figure>

        <div className="flex justify-between h-3/5 pt-6">
          <div className="flex flex-col  w-8/12">
            <h3 className='text-3xl py-2'>{article.name}</h3>

            <div className='flex flex-wrap'>
              <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore similique laudantium cum explicabo harum, vero ullam aut quidem ducimus quia, saepe suscipit, iste ipsa fuga reprehenderit sed porro? Atque non alias facere maxime minima, repellendus veniam. Repellat eligendi libero ea eius dolore vel ipsam, officiis atque. Quod, assumenda!</p>
            </div>
          </div>
          <div className=" w-4/12 p-4 flex flex-col bg-light-color shadow-inner-shadow">
            <QuantityButton className={"h-full"} article={article} />
            <Bar width="w-full" height="h-2" className="w-full" />
            <div className="flex justify-center items-center w-full">
              <p className='text-center text-7xl text-primary-color'>{article.price} $</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleModal;



