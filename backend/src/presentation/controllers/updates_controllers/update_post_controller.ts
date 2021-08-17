import {Controller, HttpResponse, Validation} from '../../contracts';
import {ok, badRequest, serverError} from '../../helpers/http_helpers';
import {IUpdatePost, UpdatePost} from '../../../core/usecases/post';

export class UpdatePostController implements Controller {
	constructor(
    private readonly validation: Validation,
    private readonly updatePost: IUpdatePost,
	) {}

	async handle(request: UpdatePost.Params): Promise<HttpResponse> {
		try {
			const error = this.validation.validate(request);
			if (error) {
				return badRequest(error);
			}

			const updateResponse = await this.updatePost.update(request);
			return ok(updateResponse);
		} catch (err) {
			console.log(err);
			return serverError(err);
		}
	}
}
