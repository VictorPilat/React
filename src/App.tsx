import "./App.css";
import avatar from './img/avatar.png';


export function App() {
    return <div className="App">

            <header  className="App-header">
                <div className="header-content">
                    <div className="but">
                        <button className="login-button">login</button>
                    </div>
                    <div className="links">
                        <a  href=""className="link"  >home</a>
                        <a href="" className="link">posts</a>
                        <a href="" className="link">contacts</a>
                    </div>
                    <div className="avatar" >
                        <img src={avatar} className="avatar-image" />
                    </div>

                </div>
                    
            </header>
            <main className="main">
                <div className="content">
                    <div className="content-up">
                        <div className="content-text-left">
                            <h1>Backend</h1>
                            <p>Пост = заголовок, текст, категория, автор.</p>
                            <p>Регистрация = логин, почта, пароль.</p>
                        </div>
                        <div className="content-text-right">
                            <h1>Frontend</h1>
                            
                        </div>
                    </div>
                    <div className="content-down">
                        <div className="content-text-down">
                            <h2>Description</h2>
                            <p>Страницы: главная, посты, создание постов и регистрация.</p>
                            <p>Можно создавать и просматривать посты.</p>
                        </div>
                    </div>
                </div>
            </main>




            <footer  className="App-footer">
                <div className="footer-content" >
                    <div className="footer-links" >
                        <a href="https://github.com/VictorPilat/React" className="footer-link" >Git</a>

                    </div>
                    <div className="footer-copyright" >
                        <p>© 2024 Ваш сайт. Все права защищены.</p>
                    </div>

                </div>

            </footer>
    </div>
}