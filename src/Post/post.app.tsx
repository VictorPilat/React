import avatar from './img/avatar.png';
import "./post.modules.css";
import { PostList } from './postList';

export function PostsPage() {
    return <div className="PostsPage">
        <header className="App-header">
            <div className="header-content">
                <div className="but">
                    <button className="login-button">login</button>
                </div>
                <div className="links">
                    <a href="" className="link">home</a>
                    <a href="" className="link">posts</a>
                    <a href="" className="link">contacts</a>
                </div>
                <div className="avatar">
                    <img src={avatar} className="avatar-image" />
                </div>
            </div>
        </header>

        <main className="main">
            <PostList />
        </main>

        <footer className="App-footer">
            <div className="footer-content">
                <div className="footer-links">
                    <a href="https://github.com/VictorPilat/React" className="footer-link">Git</a>
                </div>
                <div className="footer-copyright">
                    <p>© 2024 Ваш сайт. Все права защищены.</p>
                </div>
            </div>
        </footer>
    </div>
}