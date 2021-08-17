import {Controller, HttpResponse, Validation} from '../../contracts';

import {ISearchPostsByCategory, SearchPostsByCategory} from '../../../core/usecases/post';
import {ok, badRequest, serverError} from '../../helpers/http_helpers';

export class FindPostByCategory implements Controller {
	constructor(
		private readonly validations: Validation,
    private readonly searchRepoByCategoy: ISearchPostsByCategory,
	) {}

	async	handle(request: SearchPostsByCategory.Params): Promise<HttpResponse> {
		try {
			const error = this.validations.validate(request);
			if (error) {
				return badRequest(error);
			}

			const res = await this.searchRepoByCategoy.searchCategory(request);
			return ok(res);
		} catch (error) {
			console.log(error);
			return serverError(error);
		}
	}
}

