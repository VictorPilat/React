
import { Footer } from '../components/footer/Footer';
import { Header } from '../components/heder/Header';
import { Main } from '../components/main/Main';
import { PostList } from './List/postList';
// import { Main } from '../components/main/Main';


export function PostsPage() {
    return <div className="PostsPage">
        <Header></Header>
        

        <Main>
            <PostList />
        </Main>
        <Footer></Footer>

        
    </div>
}


// сделать маин как компонент