import styles from "./products-page.module.css"
import { useEffect, useState } from "react"
import { IMAGES } from "../../shared"
import { Post } from "../../shared/types/types"
import { Header } from "../../app/heder/Header"
import { Main } from "../../app/main/Main"
import { SelectTags } from "../../components/post/selectedtag/select-teg"
import { PostList } from "../../components/post/List/postList"
import { Footer } from "../../app/footer/Footer"

const posts: Post[] = [
  {
    id: 1,
    title: "Puss in Boots",
    content: "Только что посмотрел нового 'Кота в сапогах'! Это невероятно крутое приключение. 🐱✨ Сюжет оказался таким трогательным и глубоким. Анимация — просто произведение искусства.",
    imageUrl: IMAGES.cat,
    likes: 120,
    tags: [{ id: 1, name: "Movie" }, { id: 2, name: "Animal" }]

  },
  {
    id: 2,
    title: "Food that makes us happy",
    content: "Еда — это не просто топливо для тела, это эмоции, воспоминания и маленькие моменты удовольствия. Тарелка любимого блюда может вернуть нас в детство, напомнить о тёплых встречах или просто подарить уют в одинокий вечер. Выбирайте еду, которая радует не только желудок, но и душу. И помните: вкусная жизнь начинается с маленьких удовольствий.",
    imageUrl: IMAGES.cat,
    likes: 45,
    tags: [{ id: 3, name: "Food" }]
  },
  {
    id: 3,
    title: "A journey with furry friends",
    content: "Поездка стала особенной благодаря встречам с удивительными животными. Будь то кот, встречающий у порога домика, или собака, бегущая навстречу на лесной тропе — каждое маленькое знакомство добавляет тепла в дорогу. Животные будто ощущают наше настроение и дарят ту самую искреннюю радость, которую не спутаешь ни с чем.",
    imageUrl: IMAGES.cat,
    likes: 89,
    tags: [{ id: 4, name: "Travel" }, { id: 2, name: "Animal" }]

  },
]

export function PostsPage() {
  const [selectedTag, setSelectedTag] = useState<"All" | number>("All")
  const [searchValue, setSearchValue] = useState("")
  const [filteredPosts, setFilteredPosts] = useState(posts)

  useEffect(() => {
    const foundPosts = posts.filter(post =>{
      return post.title.toLowerCase().includes(searchValue.toLowerCase())
    })

    if (isNaN(+selectedTag)) {
      setFilteredPosts(foundPosts)
      return
    }

    const newFilteredPosts = foundPosts.filter(post =>{
      return post.tags.some(tag => tag.id === +selectedTag)
    })

    setFilteredPosts(newFilteredPosts)
  }, [searchValue, selectedTag])

  return (
    <div className={styles.PostsPage}>
      <Header />

      <Main>
        <div className={styles.content}>
          <div className={styles.left}>
            <p>Filters</p>

            <input
              className={styles["search-input"]}
              value={searchValue}
              onChange={event => setSearchValue(event.target.value)}
              placeholder="Search..."
            />

            <div className={styles["tag-category"]}>
              <p>Tags</p>
              <SelectTags
                selectedTag={selectedTag}
                setSelectedTag={setSelectedTag}
              />
            </div>
          </div>

          <PostList filteredPosts={filteredPosts} />
        </div>
      </Main>

      <Footer />
    </div>
  )
}
