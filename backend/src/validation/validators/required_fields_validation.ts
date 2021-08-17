import {Validation} from '../../presentation/contracts';
import {MissingParamError} from '../../presentation/errors/missing_param_error';

export class RequiredFieldsValidation implements Validation {
	constructor(private readonly fieldName: string) {}

	validate(input: any): Error {
		if (!input[this.fieldName]) {
			return MissingParamError.paramName(this.fieldName);
		}
	}
}

