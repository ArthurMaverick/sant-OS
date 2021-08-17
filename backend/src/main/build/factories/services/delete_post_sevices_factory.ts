import {IDeletePost} from '../../../../core/usecases/post';
import {DeletePostService} from '../../../../app/services';
import {DeletesRepository} from '../../../../infrastructure/postgres/repos/deletes';

export const makeDbDelete = (): IDeletePost => {
	const deletesRepository = new DeletesRepository();
	return new DeletePostService(deletesRepository);
};
