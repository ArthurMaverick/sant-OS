import {DeletePostController} from '../../../../presentation/controllers/delete_controllers/delete_post_contoller';
import {Controller} from '../../../../presentation/contracts';
import {makeDeleteValidation} from '../validations/delete_validation_factory';
import {makeDbDelete} from '../services/delete_post_sevices_factory';

export const makeDeleteController = (): Controller => new DeletePostController(makeDeleteValidation(), makeDbDelete());
