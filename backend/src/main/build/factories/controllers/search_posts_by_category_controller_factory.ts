import {makePostsByCategoryValidation} from '../validations/search_post_by_category_validation_factory';
import {makeDbSearch} from '../services/search_posts_sevices_factory';
import {FindPostByCategory} from '../../../../presentation/controllers';
import {Controller} from '../../../../presentation/contracts';
export const makeSearchByCategoryController = (): Controller => new FindPostByCategory(makePostsByCategoryValidation(), makeDbSearch());

