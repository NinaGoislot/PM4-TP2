import React, { useContext } from "react";
import { GlobalContext } from '../App.jsx';
import QuantityButton from "./QuantityButton";


function Article({ article, popup = false }) {



    return (
        <article className="relative flex justify-between w-2/5 m-4 p-2 border-y-2 border-neutral-500 items-center ">


        <div className="flex flex-col w-10/12 pb-20">
        
            <p className="absolute bottom-0 left-2 bg-primary-color primary-text-color w-6/12 mb-2 p-2 text-xl text-white font-['Merriweather Sans']">{article.name}</p>
        
            <p className="absolute bottom-0 right-20 bg-light-color primary-dark-color mb-2 p-2 text-2xl shadow-button-shadow border-2 border-gray-500">{article.price}$</p>

            <div className="overflow-hidden">
                {popup === false
                    ? <img className="article-img" src={`../../pictures/${article.pictures[0]}`} />
                    : <figure className="slider  flex">
                        {article.pictures.map(picture => (
                            <img className="float-left " src={`../../pictures/${picture}`} alt={article.alt}></img>
                        ))}
                      </figure>}

            </div>
        </div>
            <QuantityButton className={"h-full"} row={false} productId={article.id} article={article}/>


        </article>



    )
}

export default Article;