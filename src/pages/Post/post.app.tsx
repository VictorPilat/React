
import { Footer } from '../../app/footer/Footer';
import { Header } from '../../app/heder/Header';
import { Main } from '../../app/main/Main';
import { PostList } from '../../components/post/List/postList';
// import { Main } from '../components/main/Main';
import styles from  "./post.module.css";


export function PostsPage() {
    return <div className={styles["PostsPage"]}>
        <Header></Header>
        

        <Main>
            <PostList />
        </Main>
        <Footer></Footer>

        
    </div>
}


// сделать маин как компонент