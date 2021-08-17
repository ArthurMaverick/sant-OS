import {Controller, HttpResponse, Validation} from '../../contracts';
import {ok, badRequest, serverError} from '../../helpers/http_helpers';
import {ISearchPostBySlug, SearchPostBySlug} from '../../../core/usecases/post';

export class FindPostBySlug implements Controller {
	constructor(
		private readonly requiredParamsisEmpyt: Validation,
    private readonly searchRepoBySlug: ISearchPostBySlug,
	) {}

	async	handle(request: SearchPostBySlug.Params): Promise<HttpResponse> {
		try {
			const error = this.requiredParamsisEmpyt.validate(request);
			if (error) {
				return badRequest(error);
			}

			const res = await this.searchRepoBySlug.searchSlug(request);
			return ok(res);
		} catch (error) {
			console.log(error);
			return serverError(error);
		}
	}
}

