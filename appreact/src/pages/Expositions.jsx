import Nav from '../components/Nav'
import { observer } from 'mobx-react-lite';

function Expositions() {


    return (
        <>
            <Nav />
            <main>
                <h1>Expositions</h1>
                <div className="bg-blue-500 text-white p-4">Ceci est un exemple Tailwind</div>

            </main>
        </>
    )
}
export default observer(Expositions);