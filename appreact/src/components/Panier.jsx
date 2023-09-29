import React, { useContext, useState } from 'react';
import { GlobalContext } from '../App.jsx';
import { observer } from "mobx-react-lite";
import Bar from "./Bar";
import QuantityButton from './QuantityButton';
import ColorButton from './ColorButton.jsx';
import { useNavigate } from 'react-router-dom';

function Panier() {

  const { cartStore } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const handleModalConfirm = () => {
    setShowModal(false);
    clearStorage();
    navigate('/home');
  };

  const handleModalCancel = () => {
    setShowModal(false);
  };

  const clearStorage = () => {
    cartStore.clearLocalStorage();
  };

  return (
    <>

      <div className="w-11/12 p-6 border-custom fixed flex flex-col bg-light-color-lightened h-50 right-1/2 bottom-0 translate-x-2/4">
        <div className="flex justify-center  basis-1/4 items-stretch justify-evenly">
          <div className='flex items-center'>
            <div className='h-3/5 border-r-2 border-dark-color text-2xl pr-4 flex items-center'>
              <h2 className=''>Ma commande</h2>
            </div>
          </div>

          <ul className='cart-classes bg-light-color-dark shadow-inner-shadow basis-2/3 flex flex-wrap p-4 my-5 max-h-52'>
            {cartStore.cart.map(article => (
              <li key={article.id} className='w-full py-1 flex items-center justify-between'>
                <p className='text-standard-size'>{article.name}</p>
                <div className='flex items-center justify-between w-2/5'>
                  <QuantityButton article={article} small={true} />
                  <Bar row={false} height="h-12" />
                  <p className='text-2xl'>{article.price} $</p>
                </div>
              </li>
            ))}
            <div className='flex justify-between items-center w-full  pt-4 border-t-4 pr-1/2 border-dark-color'>
              <p className='text-2xl'>Total du panier</p>
              <p className='text-2xl'>{cartStore.getGrossCartTotal()} $</p>
            </div>
          </ul>
        </div>
        <ul className='flex justify-between mt-10'>
          <ColorButton label="Abandonner ma commande" link="/expositions" onClick={handleDeleteClick} RedBg={true} />
          <ColorButton label="Confirmer ma commande" link="/summary" GreenBg={true} />
        </ul>
      </div>

      {/*Modal de confirmation*/}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-light-color p-4 rounded shadow h-48 w-1/2 flex flex-col justify-evenly">
            <p className='text-center text-xl'>Souhaitez vous vraiment abandonner votre commande ?</p>
            <div className="flex justify-evenly mt-4 h-2/5">
              <ColorButton onClick={handleModalCancel} label="Annuler" height="h-full" RedBg={true} />
              <ColorButton onClick={handleModalConfirm} label="Confirmer" height="h-full" GreenBg={true}/>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default observer(Panier);