import {v4 as uuid} from 'uuid';
import {IdSlug} from '../../app/contracts/crypto';

export class IdGenerator implements IdSlug {
	id(): IdSlug.Result {
		return {
			slug: uuid(),
		};
	}
}

