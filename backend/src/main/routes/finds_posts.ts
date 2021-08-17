import {adaptRoute} from '../build/adapters/express_route_adapter';
import {makeSearchController, makeSearchBySlugController, makeSearchByCategoryController} from '../build/factories';
import {Router} from 'express';

export default (router: Router) => {
	router.get('/findposts/?', adaptRoute(makeSearchController()));
	router.get('/findpost/?', adaptRoute(makeSearchBySlugController()));
	router.get('/findcategories/?', adaptRoute(makeSearchByCategoryController()));
};
