type Post = {
  slug: string
  title: string
  body: string
  images: string[]
  categories: string[]
  createdAt: Date
}
export interface IInsertRepoPost {
  insert (params: IInsertRepoPost.Params): Promise<IInsertRepoPost.Result>
}

export namespace IInsertRepoPost {

  export type Params = Omit<Post, 'createdAt'>
  export type Result = boolean
}
