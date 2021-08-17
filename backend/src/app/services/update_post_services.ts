import {IUpdatePost, UpdatePost} from '../../core/usecases/post';
import {IByRepoSlugAndContent} from '../contracts/repo';
import {PostExceptions} from '../../core/errors/post_error';

export class UpdatePostServices implements IUpdatePost {
	constructor(
    private readonly Repo: IByRepoSlugAndContent,
	) {}

	async update(params: UpdatePost.Params): Promise<UpdatePost.Result> {
		return await this.Repo.set(params) || PostExceptions.UpdateError.notFound(); // See response after upgrade notfund
	}
}
