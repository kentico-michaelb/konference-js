import Head from "next/head";
import React from "react";
import styles from '../styles/Layout.module.css'

export default function Layout({ 
    children, 
    home }: { 
        children: React.ReactNode
        home?: boolean
    }) {

    return (
        <>
            <Head>
                <title>Konference by Kentico</title>
            </Head>
            <nav className={styles.nav}>
                Navigation
            </nav>
            <main className={styles.main}>
                {children}
            </main>
            <footer className={styles.footer}>
                Footer
            </footer>
        </>
    )

}