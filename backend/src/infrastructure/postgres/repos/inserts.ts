import {Post} from '../models/post';
import {IInsertRepoPost} from '../../../app/contracts';
import {getRepository} from 'typeorm';

type InsertPostParams = IInsertRepoPost.Params
type InsertPostResult = IInsertRepoPost.Result
export class InsertRepository implements IInsertRepoPost {
  private readonly insertRepo = getRepository(Post)

  async insert(clientParams: InsertPostParams): Promise<InsertPostResult> {
  	const insertRes =	await this.insertRepo.save(clientParams);
  	console.log(insertRes);
  	return Boolean(insertRes) || false;
  }
}
