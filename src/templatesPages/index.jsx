import { Header } from "../components/header";
import { FinanceForm } from "../components/financeForm";
import { Total } from "../components/total";
import { FinanceList } from "../components/financelist";
import { CreateCard } from "../components/financeCard";
import "../styles/globalStyle.scss";
import styles from "./index.module.scss";
import { useState } from "react";

export const Page1 = () => {
    const [inputInfo, setinput] = useState([]);

    const total = inputInfo.reduce((previus, e) => {
        return previus + e.value;
    }, 0)
    console.log(total)

    console.log(inputInfo)
    return(
        <>
            <Header/>
            <main className={ styles.main }>
                <section>
                    <FinanceForm list={ inputInfo } set={ setinput } />
                    { inputInfo.length === 0 ? 
                    <>
                    </>
                    :
                    <Total total={total}/>
                    }
                </section>
                <FinanceList>
                {inputInfo.length > 0 ? (
                    <>
                        {inputInfo.map((each) => {
                            return(
                            <CreateCard key={each.id} e={each} list={ inputInfo } set={ setinput } />
                            )
                        })}
                    </>
                ) :
                    <>
                        <h1 className={ styles.h1 }>Você ainda não possui nenhum lançamento</h1>
                    </>
                    
                }
                </FinanceList>
            </main>
        </>
    )
}