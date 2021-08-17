import {Post} from '../../entities/post';
import {DefaultError} from '../../entities/error';

export interface ISearchPostBySlug {
  searchSlug (_params: SearchPostBySlug.Params): Promise<SearchPostBySlug.Result>
}

export namespace SearchPostBySlug {
  export type Params = {
    slug: string,
  }
  export type Result = Post | DefaultError

}
