import Article from '../components/Article';
import React, { useContext } from 'react';
import Nav from '../components/Nav'
import { GlobalContext } from '../App.jsx';
import { observer } from 'mobx-react-lite';
import Panier from '../components/Panier';

function Expositions() {

    const { articleStore } = useContext(GlobalContext);
    const { cartStore } = useContext(GlobalContext);


    // On acccède aux données des articles via ArticleStore
    const articles = articleStore.articles;

    // Filtrer les articles qui correspondent aux expositions
    const filteredArticles = articles.filter(article => article.id.slice(0, 3) === 'EXP');


    return (
        <>
            <Nav />
            <main className='bg-light-color'>
                <div className='flex flex-wrap pb-20 justify-center'>
                    <h1 className='basis-full text-5xl italic font-normal text-center mb-4'>Nos expositions</h1>
                    <div className="relative right-16 basis-48 w-48 h-10 bg-primary-color"></div>
                </div>
                <div className='flex flex-wrap justify-center'>
                    {filteredArticles.map(article => (
                        <Article key={article.id} article={article} />
                    ))}
                </div>
                {cartStore.cart.length > 0 ? <Panier /> : ''}

            </main>
        </>
    )
}
export default observer(Expositions);