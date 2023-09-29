import React, { useContext } from 'react';
import { GlobalContext } from '../App.jsx';
import NavPaiement from '../components/NavPaiement.jsx';
import PaiementCard from '../components/PaiementCard.jsx';
import InstructionBanner from '../components/InstructionBanner.jsx';

function Paiement() {

    const { cartStore } = useContext(GlobalContext);

    return (
        <main className='paiement-section lg:justify-between'>
            <NavPaiement />
            <div className='flex justify-center w-full h-full'>
                <div className='lg:h-full sm:w-full lg:w-3/5 sm:mt-12 lg:mt-60'>
                    <InstructionBanner text="Reste à payer :" amount={cartStore.getCartTotalWithTaxes()} />
                    <div className='flex sm:flex-col justify-between lg:h-2/5 lg:w-full my-20 sm:gap-y-4'>
                        <PaiementCard icon="fa-money-bill-1" text="Payer en argent comptant" className="lg:mr-6" />
                        <PaiementCard icon="fa-credit-card" text="Payer par carte" link="/cardPaiement" className='sm:flex-row-reverse'/>
                    </div>
                    <div className="flex justify-center">
                        <PaiementCard text="Utiliser une carte cadeau" width='lg:w-3/5 sm:w-4/5' />
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Paiement;