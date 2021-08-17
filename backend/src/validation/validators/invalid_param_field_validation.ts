import {Validation} from '../../presentation/contracts';
import {InvalidParamError} from '../../presentation/errors/invalid_param_error';

export class InvalidFieldsValidation implements Validation {
	constructor(
		private readonly fieldName: string,
		private readonly paramType: string,
	) {}

	validate(input: any): Error {
		if (typeof input[this.fieldName] !== this.paramType) {
			return InvalidParamError.paramName('invalid param type');
		}
	}
}

