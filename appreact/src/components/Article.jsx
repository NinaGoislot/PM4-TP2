import React, { useContext } from "react";
import { GlobalContext } from '../App.jsx';
import QuantityButton from "./QuantityButton";


function Article({ article, popup = false }) {



    return (
        <article className="relative flex justify-between w-2/5 border-dashed m-4 border-2 border-sky-500 items-center">
            <div className="flex flex-col w-10/12">
                <p className="absolute top-0 left-0 bg-transparancy-dark-color primary-text-color w-10/12 text-2xl p-3">{article.name}</p>
                <p className="absolute bottom-0 left-0 bg-transparancy-dark-color primary-text-color text-2xl p-3">{article.price}$</p>

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