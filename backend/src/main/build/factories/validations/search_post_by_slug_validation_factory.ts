import {Validation} from '../../../../presentation/contracts';
import {RequiredFieldsValidation} from '../../../../validation/validators/required_fields_validation';
import {ValidationComposite} from '../../../../validation/validators/validation_composite';
import {InvalidFieldsValidation} from '../../../../validation/validators/invalid_param_field_validation';

export const makePostsBySlugValidation = (): ValidationComposite => {
	const validation: Validation[] = [];

	validation.push(new RequiredFieldsValidation('slug'));
	validation.push(new InvalidFieldsValidation('slug', 'string'));

	return new ValidationComposite(validation);
};

