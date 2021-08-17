
import {IDeletePost, DeletePost} from '../../core/usecases/post';
import {PostExceptions} from '../../core/errors/post_error';
import {IDeleteRepoPost} from '../contracts/repo';

export class DeletePostService implements IDeletePost {
	constructor(
    private readonly Repo: IDeleteRepoPost,
	) {}

	async delete(param: DeletePost.Params): Promise<DeletePost.Result> {
		return await this.Repo.del(param) || PostExceptions.DeleteError.notFound();
	}
}
