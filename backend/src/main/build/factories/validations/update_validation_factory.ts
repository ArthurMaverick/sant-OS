import {ValidationComposite} from '../../../../validation/validators/validation_composite';
import {InvalidFieldsValidation} from '../../../../validation/validators/invalid_param_field_validation';
import {RequiredFieldsValidation} from '../../../../validation/validators/required_fields_validation';
import {Validation} from '../../../../presentation/contracts';

export const makeUpdateValidation = (): ValidationComposite => {
	const validations: Validation[] = [];
	for (const field of ['slug', 'content']) {
		validations.push(new RequiredFieldsValidation(field));
	}

	validations.push(new InvalidFieldsValidation('slug', 'string'));
	validations.push(new InvalidFieldsValidation('content', 'object')); // Enable validator

 	return new ValidationComposite(validations);
};
