import {HttpResponse} from '../contracts/http';
import {ServerError} from '../errors/server_error';

export const badRequest = (error: Error): HttpResponse => ({
	statusCode: 400,
	body: error,
});

export const forbidden = (error: Error): HttpResponse<Error> => ({
	statusCode: 403,
	body: error,
});

// Export const unauthorized = (): HttpResponse<Error> => ({
// 	statusCode: 401,
// 	body: new UnauthorizedError(),
// });

export const serverError = (error: Error): HttpResponse<Error> => ({
	statusCode: 500,
	body: ServerError.ErrorStack(error.stack),
});

export const ok = (data: any): HttpResponse<any> => ({
	statusCode: 200,
	body: data,
});

export const noContent = (): HttpResponse<null> => ({
	statusCode: 204,
	body: null,
});

