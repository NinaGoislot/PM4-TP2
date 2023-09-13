import React, { useState, useContext } from "react";
import { GlobalContext } from '../App.jsx';


function Article({ article }) {

    const { articleStore } = useContext(GlobalContext);
    const [quantity, setQuantity] = useState(0);

    return (
        <article>
            <div>
                
            </div>
            Test
            <p>{article.name}</p>
            <p>{article.picture}</p>
            <img src="../../public/logo512.png" alt="" />
            <li>
                Quantité actuelle : {quantity && quantity > 0 ? quantity : 0}
                <button className="bg-sky-300" onClick={() => setQuantity(quantity + 1)}>
                    Ajouter
                </button>
                <button className="bg-red-300" onClick={() => setQuantity(quantity + -1)}>
                    Retirer
                </button>
            </li>

            {article && article.pictures && article.pictures[0] && (
                    <img src={`../pictures/${article.pictures[0]}`} alt={article.alt} />
                )}
        </article>



    )
}

export default Article;