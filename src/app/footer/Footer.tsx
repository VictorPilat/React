
import styles from  "./footer.module.css"

export function Footer() {
    return <footer className={styles["App-footer"]}>
            <div className={styles["footer-content"]}>
                <div className={styles["footer-links"]}>
                    <a href="https://github.com/VictorPilat/React" className={styles["footer-link"]}>Git</a>
                </div>
                <div className={styles["footer-copyright"]}>
                    <p>© 2024 Ваш сайт. Все права защищены.</p>
                </div>
            </div>
        </footer>
}
