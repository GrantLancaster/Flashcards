import Styles from "./create.module.css"
import Card from "@/components/card/card"

export default function Create() {

    return (
        <main>
            <h1>Create a New Set!</h1>
            <div className={Styles.cardHeader}>
                <h2>Term</h2>
                <h2>Definition</h2>
            </div>
            <Card />
            <div className={Styles.cardList}>
                <p>this is where the list of created cards will be.</p>
            </div>
        </main>
    )
}