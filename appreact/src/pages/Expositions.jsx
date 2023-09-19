import Article from '../components/Article';
import React, { useContext } from 'react';
import Nav from '../components/Nav'
import { GlobalContext } from '../App.jsx';
import { observer } from 'mobx-react-lite';
import Panier from '../components/Panier';

function Expositions() {

    const { articleStore } = useContext(GlobalContext);


    // On acccède aux données des articles via ArticleStore
    const articles = articleStore.articles;

    // Filtrer les articles qui correspondent aux expositions
    const filteredArticles = articles.filter(article => article.id.slice(0, 3) === 'EXP');


    return (
        <>
            <Nav />
            <main>
                <h1>Expositions</h1>
                <div className='flex flex-wrap justify-center'>
                    {filteredArticles.map(article => (
                        <Article key={article.id} article={article} />
                    ))}
                </div>
                <Panier />

            </main>
        </>
    )
}
export default observer(Expositions);