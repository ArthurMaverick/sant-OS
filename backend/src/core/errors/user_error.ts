import {DefaultError} from '../entities/error';

export namespace UserError {
	export class UserAlreadyExistsError extends DefaultError {
		override readonly name: string;
		override readonly message: string;

		constructor(message: string) {
			super();
			this.name = 'UserAlreadyExistsError';
			this.message = message;
		}

		static alreadyExists(): UserAlreadyExistsError {
			return new UserAlreadyExistsError('UserError: user already exists');
		}

		static passwordError(): UserAlreadyExistsError {
			return new UserAlreadyExistsError('UserError: email or password is incorrect');
		}

		static emailError(): UserAlreadyExistsError {
			return new UserAlreadyExistsError('UserError: email or password is incorrect');
		}
	}
}
