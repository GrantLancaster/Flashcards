import Styles from "./card.module.css";
import Button from "../button/button";

export default function Card() {
    return (
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

    )
}