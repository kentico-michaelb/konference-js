import Head from "next/head";
import React from "react";
import { NavParams } from "../models/NavParams";
import styles from '../styles/Layout.module.css'
import Navigation from "./Navigation";

export default function Layout({ 
    children, 
    home,
    navigation }: { 
        children: React.ReactNode
        home?: boolean
        navigation: Array<NavParams>
    }) {

    return (
        <>
            <Head>
                <title>Konference by Kentico</title>
            </Head>
            <Navigation pages={navigation} />
            <main className={styles.main}>
                {children}
            </main>
            <footer className={styles.footer}>
                Footer
            </footer>
        </>
    )

}