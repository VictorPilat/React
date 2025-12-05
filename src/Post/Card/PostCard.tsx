// import { PostCardProps } from '././types';
import { PostCardProps } from "../types";
// import "../post.modules.css";
import styles from  "./postCard.module.css";


export function PostCard(props: PostCardProps) {
    const {title, content, imageUrl, likes, tags} = props

    return <div className={styles["post-card"]}>
        <div className={styles["post-img"]}> 
            <img  className={styles["post-img"]} src={imageUrl} alt={title}/>
        </div>
        <div className={styles["post-content"]}>
            <p className={styles["post-title"]}>{title}</p>
            <div className={styles["post-text"]}>
                <p>{content}</p>
            </div>
            <div className={styles["post-footer"]}>
                <div className={styles["tags-line"]}>
                    {tags.map(tag => 
                        <span key={tag.id} className={styles["tag"]}>{tag.name}</span>
                    )}
                </div>
                <div className={styles["likes-line"]}>
                    <span className={styles["heart"]}>♡</span>
                    <span className={styles["likes-count"]}>{likes}</span>
                </div>
            </div>
        </div>
    </div>
}