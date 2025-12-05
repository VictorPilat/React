import styles from  "./header.module.css";

import avatar from '../../img/avatar.png';


export function Header() {
    return <header className={styles["App-header"]}>
                <div className={styles["header-content"]}>
                    <div className={styles["but"]}>
                        <button className={styles["login-button"]}>login</button>
                    </div>
                    <div className={styles["links"]}>
                        <a href="" className={styles["link"]}>home</a>
                        <a href="" className={styles["link"]}>posts</a>
                        <a href="" className={styles["link"]}>contacts</a>
                    </div>
                    <div className={styles["avatar"]}>
                        <img src={avatar} className={styles["avatar-image"]} />
                    </div>
                </div>
            </header>
}