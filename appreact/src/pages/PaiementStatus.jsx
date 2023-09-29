import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom';

function PaiementStatus() {

    const location = useLocation();
    const propsFromPreviousPage = location.state;
  
    const paymentSuccess = propsFromPreviousPage.success ? propsFromPreviousPage.sucess : true;
    const textSuccess = propsFromPreviousPage.textSucess;
    const textRefused = propsFromPreviousPage.textRefused;

    const bgColor = paymentSuccess === true ? 'bg-valid-color' : 'bg-error-color'

    return (
        <main className='paiement-section'>
            <div className="flex justify-center items-center h-2/5">
                <div className={`${bgColor}`}></div>
                <FontAwesomeIcon icon="fa-solid fa-check paiement-icon" />
            </div>
        </main> 
    )
}
export default PaiementStatus;