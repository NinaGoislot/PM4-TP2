import Nav from '../components/Nav'
import { observer } from 'mobx-react-lite';

function Expositions() {


    return (
        <>
            <Nav />
            <main>
                <h1>Expositions</h1>
            </main>
        </>
    )
}
export default observer(Expositions);