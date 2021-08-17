import {makePostsValidation} from '../validations/search_posts_validation_factory';
import {makeDbSearch} from '../services/search_posts_sevices_factory';
import {FindPost} from '../../../../presentation/controllers';
import {Controller} from '../../../../presentation/contracts';
export const makeSearchController = (): Controller => new FindPost(makePostsValidation(), makeDbSearch());
