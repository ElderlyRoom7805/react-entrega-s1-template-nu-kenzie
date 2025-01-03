import { useState } from "react";

export const CreateCard = ({ e, list, set }) => {
    const remove = (r) => {
        const newlistCard = list.filter((e) => e.id !== r);
        set(newlistCard)
    }
    const negative = (v) => {
        return v.value * -1
    }
    return(
        <ul className="list-div">
            { e.type === "entry" ? 
            <li className="content-card-entry" >
                <div className="info-card">
                    <h1>{ e.name }</h1>
                    <h3>{ e.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }</h3>
                </div>
                <div className="others-card">
                    <p>{ e.type }</p>
                    <button onClick={() => remove(e.id) }>Excluir</button>
                </div>
            </li> 
            : 
            <li className="content-card-exit" >
                <div className="info-card">
                    <h1>{ e.name }</h1>
                    <h3>{ negative(e).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h3>
                </div>
                <div className="others-card">
                    <p>{ e.type }</p>
                    <button onClick={() => remove(e.id) }>Excluir</button>
                </div>
            </li>
            }
        </ul>
    )
}