// import { PostCard } from "./PostCard"
import { PostCard } from '../Card/PostCard';
import cat from '../img/cat.png';

export function PostList() {
    const posts = [
        {
            title: "Puss in Boots", 
            content: "Только что посмотрел нового 'Кота в сапогах'! Это невероятно крутое приключение. 🐱✨ Сюжет оказался таким трогательным и глубоким. Анимация — просто произведение искусства.",
            imageUrl: cat,
            likes: 120,
            tags: [{id: 1, name: "Movie"}, {id: 2, name: "Animal"}]
        },
        {
            title: "Food that makes us happy", 
            content: "Еда — это не просто топливо для тела, это эмоции, воспоминания и маленькие моменты удовольствия. Тарелка любимого блюда может вернуть нас в детство, напомнить о тёплых встречах или просто подарить уют в одинокий вечер. Выбирайте еду, которая радует не только желудок, но и душу. И помните: вкусная жизнь начинается с маленьких удовольствий.",
            imageUrl: cat,
            likes: 45,
            tags: [{id: 3, name: "Food"}]
        },
        {
            title: "A journey with furry friends by my side", 
            content: "Поездка стала особенной благодаря встречам с удивительными животными. Будь то кот, встречающий у порога домика, или собака, бегущая навстречу на лесной тропе — каждое маленькое знакомство добавляет тепла в дорогу. Животные будто ощущают наше настроение и дарят ту самую искреннюю радость, которую не спутаешь ни с чем.",
            imageUrl: cat,
            likes: 89,
            tags: [{id: 4, name: "Travel"}, {id: 2, name: "Animal"}]
        },
    ]
    
    return <div className="content">
        <div className="left">
            <p>Filters</p>
            <input className="search-input" placeholder="Search..." />
            
            <div className="tag-category">
                <p>Tags</p>
                <div className="tag">
                    <label><input type="radio" name="tags" /> Food</label>
                    <label><input type="radio" name="tags" /> Technique</label>
                    <label><input type="radio" name="tags" /> Travel</label>
                    <label><input type="radio" name="tags" /> Movie</label>
                    <label><input type="radio" name="tags" /> Animal</label>
                </div>
            </div>
            
            <div className="likes-category">
                <p>Likes</p>
                <div className="likes">
                    <label><input type="radio" name="likes" /> Less than 0</label>
                    <label><input type="radio" name="likes" /> More than 0</label>
                    <label><input type="radio" name="likes" /> More than 50</label>
                    <label><input type="radio" name="likes" /> More than 100</label>
                </div>
            </div>
        </div>
        
        <div className="right">
            {posts.map(post => 
                <PostCard 
                    title={post.title}
                    content={post.content}
                    imageUrl={post.imageUrl}
                    likes={post.likes}
                    tags={post.tags}
                />
            )}
        </div>
    </div>
}