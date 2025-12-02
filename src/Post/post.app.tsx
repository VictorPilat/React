
import { Footer } from '../components/footer/Footer';
import { Header } from '../components/heder/Header';
import { PostList } from './postList';

export function PostsPage() {
    return <div className="PostsPage">
        <Header></Header>
        

        <main className="main">
            <PostList />
        </main>
        <Footer></Footer>

        
    </div>
}