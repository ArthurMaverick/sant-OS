type Post = {
  slug: string
  title: string
  body: string
  images: string[]
  categories: string[]
  createdAt: Date
}
export interface IDeleteRepoPost {
  del (params: IDeleteRepoPost.Params): Promise<IDeleteRepoPost.Result>
}

export namespace IDeleteRepoPost {

  export type Params = Pick<Post, 'slug'>

  export type Result = boolean
}
