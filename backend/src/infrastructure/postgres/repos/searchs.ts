import {IByRepoCategory, IByRepoPosts, IByRepoSlug} from '../../../app/contracts';
import {Post} from '../models/post';
import {getRepository} from 'typeorm';

type FindPostsParams = IByRepoPosts.Params
type FindPostsResult = IByRepoPosts.Result

type FindBySlugParams = IByRepoSlug.Params
type FindBySlugResult = IByRepoSlug.Result

type FindByCategoryParams = IByRepoCategory.Params
type FindByCategoryResult = IByRepoCategory.Result

export class SearchsRepository implements IByRepoCategory, IByRepoPosts, IByRepoSlug {
  private readonly PgPostRepo = getRepository(Post)

  async findPosts(clientParams: FindPostsParams): Promise<FindPostsResult> {
  		const postsOrError = await this.PgPostRepo.find({select: ['slug', 'title', 'body', 'categories', 'createdAt', 'images'], take: clientParams.limit ?? 100});
  		if (postsOrError !== undefined) {
  		console.log(postsOrError);
  		return postsOrError;
  	}

  	console.log(postsOrError);
  	return null;
  }

  async findSlug(clientParams: FindBySlugParams): Promise<FindBySlugResult> {
  		const postsOrError = await this.PgPostRepo.findOne({select: ['slug', 'title', 'body', 'categories', 'createdAt', 'images'], where: {slug: clientParams.slug}});
  	if (postsOrError !== undefined) {
  		console.log(postsOrError);
  		return postsOrError;
  	}

  	console.log(postsOrError);
  	return null;
  }

  async findCategory(clientParams: FindByCategoryParams): Promise<FindByCategoryResult> {
  		const postsOrError = await this.PgPostRepo.find(
  		{
  			select: ['slug', 'title', 'body', 'categories', 'createdAt', 'images'],
  			take: clientParams.limit ?? 100,
  			where: {categories: [clientParams.category]}});
  	if (postsOrError !== undefined) {
  		console.log(postsOrError);
  		return postsOrError;
  	}

  	console.log(postsOrError);
  	return null;
  }
}
