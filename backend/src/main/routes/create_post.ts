import {adaptRoute} from '../build/adapters/express_route_adapter';
import {makeCreatePostController} from '../build/factories';
import {Router} from 'express';

export default (router: Router) => {
	router.post('/createposts', adaptRoute(makeCreatePostController()));
};
