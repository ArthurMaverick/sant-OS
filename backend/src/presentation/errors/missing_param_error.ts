export class MissingParamError extends Error {
	constructor(paramName: string) {
		super(`Missing param: ${paramName}`);
		this.name = paramName;
	}

	static paramName(paramName: string): Error {
		return new MissingParamError(paramName);
	}
}
