import {Validation} from '../../presentation/contracts';

export class ValidationComposite implements Validation {
	constructor(
    private readonly validations: Validation[],
	) {}

	validate(input: any): Error | undefined {
		for (const validation of this.validations) {
			const err = validation.validate(input);
			if (err !== undefined) {
				return err;
			}
		}
	}
}
