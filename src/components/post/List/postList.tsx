import styles from "./PostList.module.css";
import { PostCard } from "./Card/PostCard";
import { PostListProps } from "./post-list.types";

export function PostList({ filteredPosts }: PostListProps) {
  return (
    <div className={styles.right}>
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
  );
}
