import avatar from './img/avatar.png';
import cat from '../img/cat.png';
import "./post.modules.css";



export function PostsPage() {
    return <div className="PostsPage">
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
                    <div  className="left" >
                        <p>Filters</p>
                        <input className="search-input" placeholder="Search..." />
                        <div className="tag-category" >
                            <p>Tags</p>
                            <div className="tag" >
                                <label><input type="radio" name="tags" /> Food</label>
                                <label><input type="radio" name="tags" /> Technique</label>
                                <label><input type="radio" name="tags" /> Travel</label>
                                <label><input type="radio" name="tags" /> Food</label>
                            </div>
                        </div>
                        <div className="likes-category" >
                            <p>Likes</p>
                            <div className="likes" >
                                <label><input type="radio" name="likes" />Less than 0</label>
                                <label><input type="radio" name="likes" />More than 0</label>
                                <label><input type="radio" name="likes" /> More than 50</label>
                                <label><input type="radio" name="likes" /> More than 100</label>
                            </div>
                            
                        </div>

                    </div>
                    <div  className="right" >
                        <div className="post-card" >
                            <div className="post-img" > 
                                <img src={cat} className="post-img " />

                            </div>
                            <div className="post-content" >
                                <p className="post-title" >Puss in Boots</p>
                                <div className="post-text" >
                                    <p>
                                        Только что посмотрел нового "Кота в сапогах"! Это невероятно крутое приключение.
                                        🐱✨ Сюжет оказался таким трогательным и глубоким. Анимация — просто произведение искусства.
                                        Смеялся до слёз и умилялся одновременно. Однозначно must-see этого сезона!
                                        wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
                                        wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
                                    </p>
                                </div>
                                <div className="post-footer" >
                                    <div className="tags-line">
                                        <span className="tag">Movie</span>
                                        <span className="tag">Animal</span>
                                    </div>


                                    <div className="likes-line">
                                        <span className="heart">♡</span>
                                        <span className="likes-count">120</span>
                                    </div>
                                                                    
                                </div>
                            </div>

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