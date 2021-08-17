import {DefaultError} from '../../entities/error';
import {Post} from '../../entities/post';

export interface ICreatePost {
  create(_params: CreatePost.Params): Promise<CreatePost.Result>
}

export namespace CreatePost {
  export type Params = Post
  export type Result = boolean | DefaultError
}

