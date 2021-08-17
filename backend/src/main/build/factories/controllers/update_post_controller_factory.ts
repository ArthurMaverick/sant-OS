import {UpdatePostController} from '../../../../presentation/controllers';
import {Controller} from '../../../../presentation/contracts';
import {makeUpdateValidation} from '../validations/update_validation_factory';
import {makeDbUpdate} from '../services';

export const makeUpdateController = (): Controller => new UpdatePostController(makeUpdateValidation(), makeDbUpdate());
