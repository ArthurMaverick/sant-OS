import {Controller, HttpResponse, Validation} from '../../contracts';
import {badRequest, ok, serverError} from '../../helpers/http_helpers';
import {IDeletePost} from '../../../core/usecases/post';

export class DeletePostController implements Controller {
	constructor(
		private readonly validations: Validation,
    private readonly deletePost: IDeletePost,
	) {}

	async handle(request: DeletePost.Request): Promise<HttpResponse> {
		try {
			const error = this.validations.validate(request);
			if (error) {
				return badRequest(error);
			}

			const deleteResponse = await this.deletePost.delete(request);
			return ok(deleteResponse);
		} catch (err) {
			console.log(err);
			return serverError(err);
		}
	}
}

export namespace DeletePost {
  export type Request = {
    slug: string,
  }
}
