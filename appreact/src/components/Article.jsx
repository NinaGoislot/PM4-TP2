import React, { useContext } from "react";
import { GlobalContext } from '../App.jsx';
import QuantityButton from "./QuantityButton";
import Bar from "./Bar.jsx";


function Article({ article, popup = false }) {



    return (
        <article className="flex flex-col justify-between w-2/5 m-4 p-2 items-center ">

            <Bar width="w-full" height="h-2" className="w-full m-2"/>
            <div className="flex justify-between h-8/12">
                <div className="flex flex-col w-10/12 h-full">
                    <div className="overflow-hidden">
                        {popup === false
                            ? <img className="object-contain w-96 h-48" src={`../../pictures/${article.pictures[0]}`} />
                            : <figure className="slider flex">
                                {article.pictures.map(picture => (
                                    <img className="float-left" src={`../../pictures/${picture}`} alt={article.alt}></img>
                                ))}
                            </figure>}

                    </div>
                    <div className="flex justify-between mt-3 ">
                        <p className="text-2xl bg-primary-color text-light-color p-3 w-9/12">{article.name}</p>
                        <div className="flex justify-center items-center bg-light-color-dark shadow-inner-shadow w-2/12">
                            <p className="text-2xl ">{article.price}$</p>
                        </div>
                    </div>
                </div>
                <div className="h-full w-2/12 pl-4">
                <QuantityButton className={"h-full shadow-outer-shadow bg-light-color-lightened rounded p-2"} row={false} productId={article.id} article={article} />
                </div>
            </div>
            <Bar width="w-full" height="h-2" className="w-full m-2"/>
        </article>



    )
}

export default Article;