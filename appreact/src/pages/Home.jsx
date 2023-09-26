import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

function Home() {


    const navigate = useNavigate();

    const toExpositions = () => {
        navigate('/Expositions');
    };

    const toExtras = () => {
        navigate('/Extras');
    };

    return (
        <>
            <main>
                <div className="flex flex-wrap h-screen w-screen bg-light-color">
                    <div className="flex" onClick={toExpositions}>
                        <img className="fixed right-96 top-56 w-6/12 h-auto border-4 border-dark-color shadow-outer-shadow" src="../../expos.jpg" alt="" />
                        <div className='fixed top-[16%] right-[22.5%] text-right text-8xl'>
                            <h1>Achetez</h1>
                            <h1>vos</h1>
                            <h1>billets</h1>
                        </div>
                    </div>

                    <div className="fixed top-[50%] left-[43%] w-36 h-2 bg-dark-color"></div>

                    <div className="flex bottom-1/3 right-20 w-screen" onClick={toExtras}>
                        <img className= "fixed right-28 bottom-1/4 w-7/12 h-auto border-dark-color shadow-outer-shadow border-4" src="../../extras.jpg" alt="" />
                        <div className='fixed left-[19%] bottom-[20%] text-8xl'>   
                            <h1>Visitez</h1>
                            <h1>avec extras</h1>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default observer(Home);