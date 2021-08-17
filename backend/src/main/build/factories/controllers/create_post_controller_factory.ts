import {makeDbCreate} from '../services';
import {makeCreatePostValidation} from '../validations/create_post_validation_factory';
import {Controller} from '../../../../presentation/contracts';
import {CreatePonstController} from '../../../../presentation/controllers/create_controllers';

export const makeCreatePostController = (): Controller => new CreatePonstController(makeCreatePostValidation(), makeDbCreate());
