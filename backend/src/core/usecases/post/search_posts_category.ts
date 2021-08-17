import {Posts} from '../../entities/post';
import {DefaultError} from '../../entities/error';

export interface ISearchPostsByCategory {
  searchCategory (_params: SearchPostsByCategory.Params): Promise<SearchPostsByCategory.Result>
}

export namespace SearchPostsByCategory {
  export type Params = {
      category: string,
      limit: number,
  }
  export type Result = Posts | DefaultError

}
