import React from 'react'
import styles from "./featured.module.css"
import Image from "next/image";

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Selamat Datang di teqo-tech: </b>Tutorial, Teknologi, Pikiran dan Inspirasi.
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src={"/p1.jpeg"} alt={""} fill className={styles.images}/>
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Ceritanya ini Judul artikel gituu</h1>
                    <p className={styles.postDescription}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id elit a velit malesuada
                        rhoncus. Integer volutpat lorem vitae tristique malesuada. Maecenas imperdiet lobortis leo et
                        congue. Vestibulum dapibus orci et nisl efficitur, eget mattis lectus eleifend. Quisque quis
                        quam nisi. Vestibulum et turpis ut leo viverra iaculis sagittis eu erat. Cras vehicula tincidunt
                        risus, lobortis maximus lectus laoreet ut.
                    </p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Featured