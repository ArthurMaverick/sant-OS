
type Post = {
  slug: string
  title: string
  body: string
  images: string[]
  categories: string[]
  createdAt: Date
}

export interface IByRepoPosts {
  findPosts (_clientParams: IByRepoPosts.Params): Promise<IByRepoPosts.Result>
}
export namespace IByRepoPosts {
  export type Params = {
    limit: number
  }
  export type Result = Post[]

}

export interface IByRepoSlug {
  findSlug (_clientParams: IByRepoSlug.Params): Promise<IByRepoSlug.Result>
}
export namespace IByRepoSlug {
  export type Params = {
    slug: string
  }
  export type Result = Post
}

export interface IByRepoCategory {
  findCategory (_clientParams: IByRepoCategory.Params): Promise<IByRepoCategory.Result>
}
export namespace IByRepoCategory {
  export type Params = {
    category: string,
    limit: number,
  }
  export type Result = Post[]

}

