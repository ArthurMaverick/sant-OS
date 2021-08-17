import {Validation, Controller, HttpResponse} from '../../contracts';
import {badRequest, ok, serverError} from '../../helpers/http_helpers';
import {ICreatePost, CreatePost} from '../../../core/usecases/post';

export class CreatePonstController implements Controller {
	constructor(
    private readonly validation: Validation,
    private readonly createPost: ICreatePost,
	) {}

	async handle(request: Omit<CreatePost.Params, 'slug' | 'createdAt'>): Promise<HttpResponse> {
		try {
			const error = this.validation.validate(request);
			if (error) {
				return badRequest(error);
			}

			const createResponse = await this.createPost.create(request as CreatePost.Params);
			return ok(createResponse);
		} catch (err) {
			console.log(err);
			return serverError(err);
		}
	}
}
