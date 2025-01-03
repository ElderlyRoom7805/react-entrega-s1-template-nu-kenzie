import { useState } from "react";

export const FinanceForm = ({ list, set }) => {
    const [Description, setDescription] = useState("");
    const [Value, setValue] = useState(0);
    const [Type, setType] = useState("");

    const submit = (e) =>{
        e.preventDefault();
        if(Type === "entry"){
            const card = {             
                id: crypto.randomUUID(),
                name: Description,
                value: Number(Value) ,
                type: Type ,
            }
            const addCard = () => {
                const newCardList = [...list, card];
                set(newCardList);
                console.log(newCardList);
                setDescription("");
                setValue("");
                setType("");
            }
            addCard()
        } else {
            const negative = (v) =>{
                return Number(v) * -1;
            }
            const card = {             
                id: crypto.randomUUID(),
                name: Description,
                value: negative(Value),
                type: Type ,
            }
            const addCard = () => {
                const newCardList = [...list, card];
                set(newCardList);
                console.log(newCardList);
                setDescription("");
                setValue("");
                setType("");
            }
            addCard()
                
            }
    }

    return(
        <div className="form-div">
            <form onSubmit={ submit }>
                <div className="description-div">
                    <label htmlFor="description">Descrição</label>
                    <input type="text" required className="description" value={ Description } id="description" placeholder="Digite aqui sua descrição" onChange={ (e) => setDescription(e.target.value)}/>
                    <span>Ex: Compra de roupas</span>
                </div>
                <div className="value-div">
                    <label htmlFor="value">Valor(R$)</label>
                    <input type="number" required id="value" value={ Value } className="value" min="1" placeholder="1" onChange={ (e) => setValue(e.target.value)}/>
                </div>
                <div className="type-div">
                    <label htmlFor="type_of_value">Tipo de valor</label>
                    <select required name="type_of_value" className="type" value={ Type } id="type_of_value" onChange={ (e) => setType(e.target.value)}>
                        <option value="" disabled>Escolha Alguma</option>
                        <option value="entry" className="options">Entrada</option>
                        <option value="exit" className="options">Despesa</option>
                    </select>
                </div>
                <button type="submit">Inserir Valor</button>
            </form>
        </div>
    )
}