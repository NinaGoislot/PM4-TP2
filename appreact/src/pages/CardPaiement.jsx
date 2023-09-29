import React, { useContext } from 'react';
import { GlobalContext } from '../App.jsx';
import NavPaiement from '../components/NavPaiement.jsx';
import PaiementCard from '../components/PaiementCard.jsx';
import InstructionBanner from '../components/InstructionBanner.jsx';

function CardPaiement() {

    const { cartStore } = useContext(GlobalContext);

    return (
        <main className='paiement-section lg:justify-between'>
            <NavPaiement />
            <div className='flex justify-center w-full h-full sm:mt-12'>
                <div className='lg:h-full lg:w-3/5 lg:mt-60 sm:w-full'>
                    <InstructionBanner text="Reste à payer :" amount={cartStore.getCartTotalWithTaxes()} />
                    <div className='flex sm:flex-col justify-between lg:h-2/5 lg:w-full my-20 sm:gap-y-4'>
                        <PaiementCard text="Carte crédit" className="lg:mr-6" />
                        <PaiementCard text="Carte débit" />
                    </div>
                </div>
            </div>
        </main>
    )
}
export default CardPaiement;