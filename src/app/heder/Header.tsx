import styles from  "./header.module.css";
import {  IMAGES } from '../../shared'
// import avatar from '../../img/avatar.png';
import { Link } from "react-router-dom";


export function Header() {
    return <header className={styles["App-header"]}>
                <div className={styles["header-content"]}>
                    <div className={styles["but"]}>
                        <button className={styles["login-button"]}>login</button>
                    </div>
                    <div className={styles["links"]}>
                        <Link className={styles["link"]} to="/">home</Link>
                        <Link className={styles["link"]} to="/posts">posts</Link>
                        <Link className={styles["link"]} to="/contacts">contacts</Link>
                    </div>
                    <div className={styles["avatar"]}>
                        <img src={IMAGES.avatar} className={styles["avatar-image"]} />
                    </div>
                </div>
            </header>
}