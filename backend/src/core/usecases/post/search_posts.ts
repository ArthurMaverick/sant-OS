import {Posts} from '../../entities/post';
import {DefaultError} from '../../entities/error';
export interface ISearchPosts {
  search (_params: SearchPosts.Params): Promise<SearchPosts.Result>
}

export namespace SearchPosts {
  export type Params = {
      limit: number,
  }
  export type Result = Posts | DefaultError

}
