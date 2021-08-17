import {DefaultError} from '../../entities/error';
import {Post} from '../../entities/post';

export interface IDeletePost {
  delete(_params: DeletePost.Params): Promise<DeletePost.Result>
}

export namespace DeletePost {
  export type Params = Pick<Post, 'slug'>
  export type Result = boolean | DefaultError
}

