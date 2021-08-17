import {Post} from '../../entities/post';
import {DefaultError} from '../../entities/error';

export interface IUpdatePost {
  update(_params: UpdatePost.Params): Promise<UpdatePost.Result>
}

export namespace UpdatePost {

  export type Params = {
    slug: string,
    content: Omit<Post, 'slug' | 'createdAt'>
  }

  export type Result = boolean | DefaultError

}

