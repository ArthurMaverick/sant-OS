import {Post} from '../models/post';
import {IByRepoSlugAndContent} from '../../../app/contracts';
import {getRepository} from 'typeorm';

type SetRepoParams = IByRepoSlugAndContent.Params
type SetRepoResult = IByRepoSlugAndContent.Result

export class UpdatesRepository implements IByRepoSlugAndContent {
  private readonly setTepo = getRepository(Post)

  async set(clientParams:SetRepoParams): Promise<SetRepoResult> {
  	const updateRes = await this.setTepo.update(clientParams.slug, clientParams.content);
  	console.log(updateRes);
  	return Boolean(updateRes) || false;
  }
}

