import {Validation} from '../../../../presentation/contracts';
import {ValidationComposite} from '../../../../validation/validators/validation_composite';
import {InvalidFieldsValidation} from '../../../../validation/validators/invalid_param_field_validation';
import {RequiredFieldsValidation} from '../../../../validation/validators/required_fields_validation';

export const makePostsValidation = (): ValidationComposite => {
	const validation: Validation[] = [];

	validation.push(new InvalidFieldsValidation('limit', 'string'));
	validation.push(new RequiredFieldsValidation('limit'));

	return new ValidationComposite(validation);
};

