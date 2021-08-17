import {Controller} from '../../../presentation/contracts';
import {RequestHandler} from 'express';

type Adapter = (controller: Controller) => RequestHandler

export const adaptRoute: Adapter = controller => async (req, res) => {
	const request = {
		...(req.body || {}),
		...(req.query || {}),
	};

	const {body, statusCode} = await controller.handle(request);
	const json = statusCode >= 200 && statusCode <= 299
		? body
		: {error: body.message};

	res.status(statusCode).json(json);
};

