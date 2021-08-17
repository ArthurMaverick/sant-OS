import {ICreatePost} from '../../../../core/usecases/post';
import {InsertPostServices} from '../../../../app/services';
import {InsertRepository} from '../../../../infrastructure/postgres/repos/inserts';
import {IdGenerator} from '../../../../infrastructure/idGenerator/create_id';
export const makeDbCreate = (): ICreatePost => {
	const insertRepository = new InsertRepository();
	const idGenerator = new IdGenerator();
	return new InsertPostServices(insertRepository, idGenerator);
};
