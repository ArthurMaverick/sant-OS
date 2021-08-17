import {ValidationComposite} from '../../../../validation/validators/validation_composite';
import {InvalidFieldsValidation} from '../../../../validation/validators/invalid_param_field_validation';
import {RequiredFieldsValidation} from '../../../../validation/validators/required_fields_validation';
import {Validation} from '../../../../presentation/contracts';

export const makeCreatePostValidation = (): ValidationComposite => {
	const validations: Validation[] = [];
	for (const field of ['title', 'body', 'images', 'categories']) {
		validations.push(new RequiredFieldsValidation(field));
	}

	 validations.push(new InvalidFieldsValidation('title', 'string'));
	 validations.push(new InvalidFieldsValidation('body', 'string'));
	//  Validations.push(new InvalidFieldsValidation('images', 'string'));
	//  Validations.push(new InvalidFieldsValidation('categories', 'string'));

	return new ValidationComposite(validations);
};
