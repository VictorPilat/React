import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from "./Home/home.app";
import { PostsPage } from "./Post/post.app";

export function App() {
        return <BrowserRouter>
        <Routes>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/posts' element={<PostsPage/>}></Route>
        </Routes>
    </BrowserRouter>
   
}