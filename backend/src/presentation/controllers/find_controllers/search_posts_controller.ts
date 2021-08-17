import {Controller, HttpResponse, Validation} from '../../contracts';

import {ISearchPosts, SearchPosts} from '../../../core/usecases/post';
import {ok, badRequest, serverError} from '../../helpers/http_helpers';

export class FindPost implements Controller {
	constructor(
		private readonly validations: Validation,
    private readonly searchRepo: ISearchPosts,
	) {}

	async	handle(request: SearchPosts.Params): Promise<HttpResponse> {
		try {
			const error = this.validations.validate(request);
			if (error) {
				return badRequest(error);
			}

			const res = await this.searchRepo.search(request);
			return ok(res);
		} catch (error) {
			console.log(error);
			return serverError(error);
		}
	}
}

