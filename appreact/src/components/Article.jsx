import React, { useState, useContext } from "react";
import { GlobalContext } from '../App.jsx';
import QuantityButton from "./QuantityButton";


function Article({ article }) {

    const { articleStore } = useContext(GlobalContext);


    return (
        <article className="flex justify-between w-2/5 border-dashed m-4 border-2 border-sky-500 items-center">
            <div className="flex flex-col">
                <p>{article.name}</p>
                <p>{article.picture[0]}</p>
                <p>{article.price}$</p>
                <img src="../../public/icons8-logo-480.svg" className="w-40 h-40" alt="" />
                <img src={`../pictures/${article.picture[0]}`} className="w-40 h-40" alt="" />
            </div>

            <QuantityButton row={false} />


        </article>



    )
}

export default Article;