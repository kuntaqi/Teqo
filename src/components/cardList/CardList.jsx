import React from 'react'
import styles from "./cardlist.module.css"
import Pagination from "@/components/pagination/Pagination";

const CardList = () => {
    return (
        <div className={styles.container}>
            <Pagination/>
            CardList
        </div>
    )
}

export default CardList