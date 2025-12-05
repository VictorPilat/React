// import { PostCardProps } from '././types';
import { PostCardProps } from "../types";
import "../post.modules.css";



export function PostCard(props: PostCardProps) {
    const {title, content, imageUrl, likes, tags} = props

    return <div className="post-card">
        <div className="post-img"> 
            <img  className="post-img" src={imageUrl} alt={title}/>
        </div>
        <div className="post-content">
            <p className="post-title">{title}</p>
            <div className="post-text">
                <p>{content}</p>
            </div>
            <div className="post-footer">
                <div className="tags-line">
                    {tags.map(tag => 
                        <span key={tag.id} className="tag">{tag.name}</span>
                    )}
                </div>
                <div className="likes-line">
                    <span className="heart">♡</span>
                    <span className="likes-count">{likes}</span>
                </div>
            </div>
        </div>
    </div>
}