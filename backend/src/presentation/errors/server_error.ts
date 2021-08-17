export class ServerError extends Error {
	 constructor(stack: string) {
		super('InternalServerError');
		this.name = 'ServerError';
		this.stack = stack;
	}

	static ErrorStack(stack: string) {
		return new ServerError(stack);
	}
}

