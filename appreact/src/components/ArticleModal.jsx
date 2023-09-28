import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
      <div className="bg-light-color-lightened w-4/5 h-3/5 rounded-lg shadow-lg p-12 relative">
        <bouton className="absolute -right-3 -top-3 m-0 p-0 bg-error-color rounded-full w-10 h-10 flex items-center justify-center cursor-pointer" onClick={onClose}><FontAwesomeIcon className="text-xl text-light-color" icon="fa-solid fa-xmark" /></bouton>
        <figure className="flex h-2/5">
          <img className="w-full h-auto object-cover" src={`../../pictures/${article.pictures[0]}`} />
        </figure>

        <div className="flex justify-between h-3/5 pt-6">
          <div className={`flex flex-col w-8/12 mr-12 ${article.infos !== "" ? "justify-between" : ""}`}>
            <div>
              <h3 className='text-3xl py-2'>{article.name}</h3>
              <div className='flex flex-wrap my-6'>
                <p className=''>{article.description}</p>
              </div>
            </div>
            {article.duration !== "" || article.attendance !== "" ?
              <div className='flex flex-col justify-between flex-1'>
                <div>
                  {article.duration !== "" ?
                    <div className='flex my-4'>
                      <p className='pr-2 font-bold'>Durée de l'exposition : </p>
                      <p className=''> {article.duration}</p>
                    </div> : ''}

                    {article.attendance !== "" ?
                    <div className='flex my-4'>
                      <p className='pr-2 font-bold'>Taux de fréquentation : </p>
                      <p className=''> {article.attendance} %</p>
                    </div> : ''}
                </div>
                <p className='italic text-primary-color'>* La durée et le taux de fréquentation sont donnés à titre d'indicatif et sont pas sources d'exactitude. Les données sont basées sur des observations mises à jours régulièrement.</p>
              </div> : ''}

            {article.infos !== "" ?
              <div className=''>
                <p className='italic text-primary-color'>*  {article.infos}</p>
              </div> : ''}
          </div>
          <div className=" w-4/12 flex flex-col bg-light-color shadow-inner-shadow px-6 py-3">
            <QuantityButton className={"h-full"} article={article} popUp={true} />
            <Bar width="w-full" height="h-2" className="w-full" />
            <div className="flex justify-center items-center w-full pt-8">
              <p className='text-center text-7xl text-primary-color'>{article.price} $</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleModal;



