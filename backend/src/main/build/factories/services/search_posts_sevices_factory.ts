import {ISearchPosts, ISearchPostBySlug, ISearchPostsByCategory} from '../../../../core/usecases/post';
import {SearchPostsServices} from '../../../../app/services';
import {SearchsRepository} from '../../../../infrastructure/postgres/repos/searchs';

export const makeDbSearch = (): ISearchPosts & ISearchPostBySlug & ISearchPostsByCategory => {
	const searchsRepository = new SearchsRepository();
	return new SearchPostsServices(searchsRepository);
};
