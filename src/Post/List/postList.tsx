import { useEffect, useState } from "react"
import { PostCard } from '../Card/PostCard'
import cat from '../img/cat.png'
import styles from "./PostList.module.css"


const postsData = [
    {
        id: 1,
        title: "Puss in Boots",
        content: "Только что посмотрел нового 'Кота в сапогах'! Это невероятно крутое приключение. 🐱✨ Сюжет оказался таким трогательным и глубоким. Анимация — просто произведение искусства.",
        imageUrl: cat,
        likes: 120,
        tags: [{ id: 1, name: "Movie" }, { id: 2, name: "Animal" }]
    },
    {
        id: 2,
        title: "Food that makes us happy",
        content: "Еда — это не просто топливо для тела, это эмоции, воспоминания и маленькие моменты удовольствия. Тарелка любимого блюда может вернуть нас в детство, напомнить о тёплых встречах или просто подарить уют в одинокий вечер. Выбирайте еду, которая радует не только желудок, но и душу. И помните: вкусная жизнь начинается с маленьких удовольствий.",
        imageUrl: cat,
        likes: 45,
        tags: [{ id: 3, name: "Food" }]
    },
    {
        id: 3,
        title: "A journey with furry friends",
        content: "Поездка стала особенной благодаря встречам с удивительными животными. Будь то кот, встречающий у порога домика, или собака, бегущая навстречу на лесной тропе — каждое маленькое знакомство добавляет тепла в дорогу. Животные будто ощущают наше настроение и дарят ту самую искреннюю радость, которую не спутаешь ни с чем.",
        imageUrl: cat,
        likes: 89,
        tags: [{ id: 4, name: "Travel" }, { id: 2, name: "Animal" }]
    },
];

const tagsData = [
    { id: 1, name: "Movie" },
    { id: 2, name: "Animal" },
    { id: 3, name: "Food" },
    { id: 4, name: "Travel" }
];


export function PostList() {

    const [searchValue, setSearchValue] = useState<string>("")
    const [selectedTag, setSelectedTag] = useState<"All" | number>("All")
    const [filteredPosts, setFilteredPosts] = useState(postsData)


    useEffect(() => {

        const foundPosts = postsData.filter(post =>{
            return post.title.toLowerCase().includes(searchValue.toLowerCase())
        });

        if (isNaN(+selectedTag)) {
            setFilteredPosts(foundPosts)
            return
        }

        const newFiltered = foundPosts.filter(post => {
            const tagIds = post.tags.map(tag => tag.id)
            return tagIds.includes(+selectedTag)
        })

        setFilteredPosts(newFiltered)

    }, [searchValue, selectedTag])

    return (
        <div className={styles["content"]}>
            <div className={styles["left"]}>
                <p>Filters</p>
                <input
                    className={styles["search-input"]}
                    placeholder="Search..."
                    value={searchValue}
                    onChange={event => setSearchValue(event.target.value)}
                />
                <div className={styles["tag-category"]}>
                    <p>Tags</p>
                    <div className={styles["tag"]}>

                        <label>
                            <input
                                type="radio"
                                onChange={() => setSelectedTag("All")}
                                checked={selectedTag === "All"}
                            />
                            All
                        </label>

                        {tagsData.map(tag => (
                            <label key={tag.id}>
                                <input
                                    type="radio"
                                    onChange={() => setSelectedTag(tag.id)}
                                    checked={selectedTag === tag.id}
                                />
                                {tag.name}
                            </label>
                        ))}
                    </div>
                </div>
                <div className={styles["likes-category"]}>
                <p>Likes</p>
                <div className={styles["likes"]}>
                    <label><input type="radio" name="likes" /> Less than 0</label>
                    <label><input type="radio" name="likes" /> More than 0</label>
                    <label><input type="radio" name="likes" /> More than 50</label>
                    <label><input type="radio" name="likes" /> More than 100</label>
                </div>
            </div>
            </div>
            <div className={styles["right"]}>
                {filteredPosts.map(post => (
                    <PostCard
                        key={post.id}
                        title={post.title}
                        content={post.content}
                        imageUrl={post.imageUrl}
                        likes={post.likes}   
                        tags={post.tags}
                    />
                ))}
            </div>

        </div>
    )
}
