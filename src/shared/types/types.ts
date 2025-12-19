export interface Tag {
  id: number;
  name: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  likes: number;
  tags: Tag[];
}

export interface PostCardProps {
  title: string;
  content: string;
  imageUrl: string;
  likes: number;
  tags: Tag[];
}