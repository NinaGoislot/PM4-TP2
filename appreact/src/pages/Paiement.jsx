import React, { useContext } from 'react';
import { GlobalContext } from '../App.jsx';
import NavPaiement from '../components/NavPaiement.jsx';
import PaiementCard from '../components/PaiementCard.jsx';
import InstructionBanner from '../components/InstructionBanner.jsx';

function Paiement() {

    const { cartStore } = useContext(GlobalContext);

    return (
        <main className='paiement-section justify-between'>
            <NavPaiement />
            <div className='flex justify-center w-full h-full'>
                <div className='h-full w-3/5 mt-60'>
                    <InstructionBanner text="Reste à payer :" amount={cartStore.getCartTotalWithTaxes()} />
                    <div className='flex justify-between h-2/5 w-full my-20'>
                        <PaiementCard icon="fa-money-bill-1" text="Payer en argent comptant" className="mr-6" />
                        <PaiementCard icon="fa-credit-card" text="Payer par carte" link="/cardPaiement" />
                    </div>
                    <div className="flex justify-center">
                        <PaiementCard text="Utiliser une carte cadeau" width='w-3/5' />
                    </div>
                </div>
                <div className='mt-24 w-full flex justify-center'>
                <NavItem name="Retourner à l'accueil" link="/" iconRight={false} className="w-1/3" onClick={clearStorage}/>
                </div>
            </div>
        </main>
    )
}
export default Paiement;