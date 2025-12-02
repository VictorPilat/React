import "./header.css";

import avatar from '../../img/avatar.png';


export function Header() {
    return <header className="App-header">
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
}