import {Router as expressRouter, Express} from 'express';
import {readdirSync} from 'fs';
import path from 'path';

// Passa o Router do express para o arquivo routes.ts
export default (app: Express): void => {
	const router = expressRouter();
	app.use('/api', router);
	const paths = path.join(__dirname, '..', 'routes');

	readdirSync(paths).map(async file => {
		const routeImports = (await import(`../routes/${file}`)).default;
		routeImports(router);
	});
};
