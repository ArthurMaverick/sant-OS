import {adaptRoute} from '../build/adapters/express_route_adapter';
import {makeUpdateController} from '../build/factories/controllers/update_post_controller_factory';
import {Router} from 'express';

export default (router: Router) => {
	router.put('/updatepost', adaptRoute(makeUpdateController()));
};
