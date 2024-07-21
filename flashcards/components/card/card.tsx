import Styles from "./card.module.css";

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
        </div>

    )
}