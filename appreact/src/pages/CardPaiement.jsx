import React, { useContext } from 'react';
import { GlobalContext } from '../App.jsx';
import NavPaiement from '../components/NavPaiement.jsx';
import PaiementCard from '../components/PaiementCard.jsx';
import InstructionBanner from '../components/InstructionBanner.jsx';

function CardPaiement() {

    const { cartStore } = useContext(GlobalContext);

    return (
        <main className='paiement-section justify-between'>
            <NavPaiement />
            <div className='flex justify-center w-full h-full'>
                <div className='h-full w-3/5 mt-60'>
                    <InstructionBanner text="Reste à payer :" amount={cartStore.getCartTotalWithTaxes()} />
                    <div className='flex justify-between h-2/5 w-full my-20'>
                        <PaiementCard text="Carte crédit" className="mr-6" />
                        <PaiementCard text="Carte débit" />
                    </div>
                </div>
            </div>
        </main>
    )
}
export default CardPaiement;