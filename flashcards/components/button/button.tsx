
interface button {
    title: string,
    color: string
}

import Styles from "./button.module.css"

export default function Button(props: button) {
    return (
        <button className={Styles.saveButton}>{props.title}</button>
    )
}