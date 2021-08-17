import {IInsertRepoPost, IdSlug} from '../contracts';

import {ICreatePost, CreatePost} from '../../core/usecases/post';
import {PostExceptions} from '../../core/errors/post_error'; // Create a insert error

export class InsertPostServices implements ICreatePost {
	constructor(
    private readonly repo: IInsertRepoPost,
		private readonly uuid: IdSlug,
	) {}

	async create(AnemicClientParams: Omit<CreatePost.Params, 'slug' | 'createdAt'>): Promise<CreatePost.Result> {
		const RichclientParams = {...AnemicClientParams, ...this.uuid.id()};
		const postOrError = await this.repo.insert(RichclientParams);
		return postOrError || PostExceptions.CreateError.unexpectedError();
	}
}
