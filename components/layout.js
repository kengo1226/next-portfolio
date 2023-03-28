import Head from "next/head";
import styles from "../components/layout.module.css";

export default function layout({children}) {
  return (
    <>
        <Head>
            <title>ポートフォリオ</title>
        </Head>
        <header className={styles.header}>
            <h1>LOGO</h1>
            <ul>
                <li>menu</li>
                <li>menu</li>
                <li>menu</li>
            </ul>
        </header>
        <main>{children}</main>
        <footer>footer 2023</footer>
    </>
  )
}