import Nav from '../components/Nav'
import { observer } from 'mobx-react-lite';
import Popup from '../components/Popup';

function Home() {


    return (
        <>
            <Nav />
            <main>
            <Popup  />
            </main>
        </>
    )
}
export default observer(Home);