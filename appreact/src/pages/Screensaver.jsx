import Nav from '../components/Nav';
import { GlobalContext } from '../App';
import { observer } from 'mobx-react-lite';

function Articles() {


    return (
        <>
            <Nav />
            <main>
            </main>
        </>
    )
}
export default observer(Articles);