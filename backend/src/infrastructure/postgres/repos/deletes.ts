import {Post} from '../models/post';
import {IDeleteRepoPost} from '../../../app/contracts';
import {getRepository} from 'typeorm';

type DeletePostParams = IDeleteRepoPost.Params
type DeletePostResult = IDeleteRepoPost.Result
export class DeletesRepository implements IDeleteRepoPost {
  private readonly delRepo = getRepository(Post)

  async del(clientParams: DeletePostParams): Promise<DeletePostResult> {
  	const deleteRes =	await this.delRepo.delete(clientParams.slug);
  	console.log(deleteRes);
  	return Boolean(deleteRes) || false;
  }
}
