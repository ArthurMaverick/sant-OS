
import {ISearchPosts, SearchPosts} from '../../core/usecases/post/search_posts';
import {ISearchPostBySlug, SearchPostBySlug} from '../../core/usecases/post/search_post_slug';
import {ISearchPostsByCategory, SearchPostsByCategory} from '../../core/usecases/post/search_posts_category';
import {PostExceptions} from '../../core/errors/post_error';
import {IByRepoPosts, IByRepoSlug, IByRepoCategory} from '../contracts/repo';

export class SearchPostsServices implements ISearchPosts, ISearchPostBySlug, ISearchPostsByCategory {
	constructor(
    private readonly find: IByRepoPosts & IByRepoCategory & IByRepoSlug,
	) {}

	async search(params: SearchPosts.Params): Promise<SearchPosts.Result> {
		return await this.find.findPosts(params) ?? PostExceptions.PostError.notFound();
	}

	async searchSlug(params: SearchPostBySlug.Params): Promise<SearchPostBySlug.Result> {
		return await this.find.findSlug(params) ?? PostExceptions.SlugError.notFound();
	}

	async searchCategory(params: SearchPostsByCategory.Params): Promise<SearchPostsByCategory.Result> {
		return await this.find.findCategory(params) ?? PostExceptions.CategoryError.notFound();
	}
}
