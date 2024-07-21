import Styles from "./create.module.css"
import Card from "@/components/card/card"
import Button from "@/components/button/button"

export default function Create() {

    function check() {
        console.log("the generic button triggered the function");
    }

    return (
        <main>
            <h1>Create a New Set:</h1>
            <h3>Name your set.</h3>
            <input></input>
            <h3>Add a description:</h3>
            <input></input>
            <div className={Styles.cardHeader}>
                <h2>Term</h2>
                <h2>Definition</h2>
            </div>

            <div className={Styles.cardParent}>
                <div className={Styles.inputField}>
                    <div className={Styles.inputBuffer}>
                        <input></input>
                    </div>
                    <div className={Styles.inputBuffer}>
                        <input></input>
                    </div>
                </div>
                <Button title="add to list" color="blue"></Button>
            </div>

            <div className={Styles.cardList}>
                <p>this is where the list of created cards will be.</p>
            </div>
        </main>
    )
}