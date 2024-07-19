import Link from "next/link";
import Image from "next/image";
import Styles from "./NavMenu.module.css";

export default function NavMenu() {

    return (
        <nav className={Styles.nav}>
            <Image 
                src="/FCLogo.png"
                alt="Vercel Logo Image"
                width={100}
                height={100}
            />
            <ul className={Styles.links}>
                <li className={Styles.li}>
                    <Link href={"/"}>Home</Link>
                </li>
                <li className={Styles.li}>
                    <Link href={"/study"}>Study</Link>
                </li>
                <li className={Styles.li}>
                    <Link href={"/create"}>Create</Link>
                </li>
                <li className={Styles.li}>
                    <Link href={"/about"}>About</Link>
                </li>
                <li className={Styles.li}>
                    <Link href={"/login"}>Log In</Link>
                </li>
            </ul>
        </nav>
    );
}