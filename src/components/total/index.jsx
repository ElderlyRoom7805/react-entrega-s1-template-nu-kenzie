export const Total = ({ total }) => {
    return(
        <div className="total-div">
            <div>
                <h1>Valor Total:</h1>
                <h1 className="price">{ total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }</h1>
            </div>
            <p>
                O valor se refero ao saldo
            </p>
        </div>
    )
}