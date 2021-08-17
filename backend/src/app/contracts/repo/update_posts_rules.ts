type Post = {
  slug: string
  title: string
  body: string
  images: string[]
  categories: string[]
  createdAt: Date
}
export interface IByRepoSlugAndContent {
  set (params: IByRepoSlugAndContent.Params): Promise<IByRepoSlugAndContent.Result>
}

export namespace IByRepoSlugAndContent {

  export type Params = {
    slug: string
    content: Omit<Post, 'slug' | 'createdAt'>
  }
  export type Result = boolean
}

