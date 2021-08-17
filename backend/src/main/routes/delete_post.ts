import {adaptRoute} from '../build/adapters/express_route_adapter';
import {makeDeleteController} from '../build/factories';
import {Router} from 'express';

export default (router: Router) => {
	router.delete('/deleteposts/?', adaptRoute(makeDeleteController()));
};
