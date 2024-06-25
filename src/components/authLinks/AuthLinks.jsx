"use client";

import React, {useState} from 'react'
import Link from "next/link";
import styles from "./authlinks.module.css";

const AuthLinks = () => {
    const [open, SetOpen] = useState(false);
    const status = "notauthenticated"

    return (
        <>
            {status === "notauthenticated" ? (
                <Link href={"/login"} className={styles.link}>Login</Link>
            ) : (
                <>
                    <Link href={"/write"} className={styles.link}>Write</Link>
                    <span className={styles.link}>Logout</span>
                </>
            )}
            <div className={styles.burger} onClick={() => SetOpen(!open)}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            {open && (
                <div className={styles.responsiveMenu}>
                    <Link href={"/"}>Homepage</Link>
                    <Link href={"/"}>Contacts</Link>
                    <Link href={"/"}>About</Link>
                    {status === "notauthenticated" ? (
                        <Link href={"/login"}>Login</Link>
                    ) : (
                        <>
                            <Link href={"/write"}>Write</Link>
                            <span className={styles.link}>Logout</span>
                        </>
                    )}
                </div>
            )}
        </>
    )
}

export default AuthLinks