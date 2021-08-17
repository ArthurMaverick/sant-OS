import {Validation} from '../../../../presentation/contracts';
import {RequiredFieldsValidation} from '../../../../validation/validators/required_fields_validation';
import {ValidationComposite} from '../../../../validation/validators/validation_composite';
import {InvalidFieldsValidation} from '../../../../validation/validators/invalid_param_field_validation';

export const makePostsByCategoryValidation = (): ValidationComposite => {
	const validation: Validation[] = [];

	validation.push(new InvalidFieldsValidation('category', 'string'));
	validation.push(new InvalidFieldsValidation('limit', 'number'));

	validation.push(new RequiredFieldsValidation('category'));
	validation.push(new RequiredFieldsValidation('limit'));

	return new ValidationComposite(validation);
};

