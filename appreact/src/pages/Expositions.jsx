import Article from '../components/Article';
import React, { useContext } from 'react';
import Nav from '../components/Nav'
import { GlobalContext } from '../App.jsx';
import { observer } from 'mobx-react-lite';

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
                <div className="bg-blue-500 text-white p-4">Ceci est un exemple Tailwind</div>
                {filteredArticles.map(article => (
                    <Article key={article.id} article={article} />
                ))}

            </main>
        </>
    )
}
export default observer(Expositions);