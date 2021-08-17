export type Post = {
  slug: string
  title: string
  body: string
  images: string[]
  categories: string[]
  createdAt: Date
};

export type Posts = Post[];
