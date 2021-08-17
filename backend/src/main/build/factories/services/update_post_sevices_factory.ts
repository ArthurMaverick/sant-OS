import {IUpdatePost} from '../../../../core/usecases/post';
import {UpdatePostServices} from '../../../../app/services';
import {UpdatesRepository} from '../../../../infrastructure/postgres/repos/updates';

export const makeDbUpdate = (): IUpdatePost => {
	const updateRepository = new UpdatesRepository();
	return new UpdatePostServices(updateRepository);
};
