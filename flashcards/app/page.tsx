import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <h3>Welcome to my flashcards app!</h3>
      <p>
        The purpose of this application is to get some practice with developing in Next.js, and create a web application that can be used for studying some terms and definitions.
      </p>
      <p>There are two ways you can use this application:</p>
      <ol>
        <li>Make a temporary set to study right now, then have it deleted when you are done.</li>
        <li>Make an account and save your sets to your profile so you can come back to them anytime</li>
      </ol>
      <p>The choice for which one to use is up to you. No extra data will be needed from you outside of a username and password so that the sets you create can be saved in the database.
      </p>

      <h3>Want an account but don't have one?</h3>
      <p>Make one <Link href={"/login"}>here</Link>.</p>
    </main>
  );
}
