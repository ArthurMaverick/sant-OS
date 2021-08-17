import {makePostsBySlugValidation} from '../validations/search_post_by_slug_validation_factory';
import {makeDbSearch} from '../services/search_posts_sevices_factory';
import {FindPostBySlug} from '../../../../presentation/controllers';
import {Controller} from '../../../../presentation/contracts';
export const makeSearchBySlugController = (): Controller => new FindPostBySlug(makePostsBySlugValidation(), makeDbSearch());

