interface IPost {
  id: number;
  createdAt: string;
  author: IUser;
  authorId: number;
  theme: ITheme;
  themeId: number;
  tags: ITag[];
  _count: {
    likes: number;
  };
  comments: IComment[];
}

interface IAuthor {
  id: number;
  name: string;
  avatar: string;
  about: string;
  registeredAt: string;
  role: string;
  status: string;
}

interface IUser {
  id: number;
  name: string;
  avatar: string;
  about: string;
  registeredAt: string;
  role: string;
  status: string;
}

interface ITheme {
  id: number;
  name: string;
  createdAt: string;
}

interface ITag {
  id: number;
  name: number;
  createdAt: number;
  posts: IPost[];
  users: IUser[];
}

interface IComment {
  id: string;
  createdAt: string;
  content: string;
  postId: string;
  authorId: number;
  parentCommentId: null;
  childComments?: [];
}

export type { IPost, IUser };
