export class InvalidParamError extends Error {
	constructor(paramName: string) {
		super(`invalid param: ${paramName}`);
		this.name = paramName;
	}

	static paramName(paramName: string) {
		return new InvalidParamError(paramName);
	}
}
