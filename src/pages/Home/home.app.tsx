// import avatar from './img/avatar.png';
import { Footer } from '../../app/footer/Footer'
import { Header } from '../../app/heder/Header'
import { Main } from '../../app/main/Main'
import styles from  "./home.module.css"

export function HomePage() {
    return <div className={styles["App"]}>

            <Header></Header>
            <Main>
                <div className={styles["content"]}>
                    <div className={styles["content-up"]}>
                        <div className={styles["content-text-left"]}>
                            <h1>Backend</h1>
                            <p>Пост = заголовок, текст, категория, автор.</p>
                            <p>Регистрация = логин, почта, пароль.</p>
                        </div>
                        <div className={styles["content-text-right"]}>
                            <h1>Frontend</h1>
                            <p>Пост = заголовок, текст, категория, автор.</p>
                            <p>Регистрация = логин, почта, пароль.</p>
                        </div>
                    </div>
                    <div className={styles["content-down"]}>
                        <div className={styles["content-text-down"]}>
                            <h2>Description</h2>
                            <p>Страницы: главная, посты, создание постов и регистрация.</p>
                            <p>Можно создавать и просматривать посты.</p>
                        </div>
                    </div>
                </div>
            </Main>




            <Footer></Footer>
    </div>
}