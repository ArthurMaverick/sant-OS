import {DefaultError} from '../entities/error';

export namespace PostExceptions {

  export class EmptyFieldError extends DefaultError {
      declare readonly name: string;
      declare readonly message: string;

  	constructor() {
    	super();
    	this.name = 'EmptyFieldError';
    	this.message = 'Error: there any empty field in your request';
  	}

  	 static error():EmptyFieldError {
  		return new EmptyFieldError();
  	}
  }

	export class CategoryError extends DefaultError {
    declare readonly name: string;
    declare readonly message: string;

  	constructor(message: string) {
    	super();
    	this.name = 'CategoryError';
    	this.message = message;
  	}

  	 static isRequired():CategoryError {
  		return new CategoryError('CategoryError: category is Required');
  	}

    static notFound():CategoryError {
    	return new CategoryError('CategoryError: category not exists');
    }
	}

	export class SlugError extends DefaultError {
    declare readonly name: string;
    declare readonly message: string;

  	constructor(message: string) {
    	super();
    	this.name = 'SlugError';
    	this.message = message;
  	}

  	 static isRequired(): SlugError {
  		return new SlugError('SlugError: slug is Required');
  	}

    static notFound(): SlugError {
    	return new SlugError('SlugError: slug not exists');
    }
	}

	export class PostError extends DefaultError {
    declare readonly name: string;
    declare readonly message: string;

  	constructor(message: string) {
    	super();
    	this.name = 'PostError';
    	this.message = message;
  	}

    static notFound(): PostError {
    	return new PostError('PostError: not exists posts');
    }
	}

	export class UpdateError extends DefaultError {
    declare readonly name: string;
    declare readonly message: string;

  	constructor(message: string) {
    	super();
    	this.name = 'UpadateError';
    	this.message = message;
  	}

    static isRequired(): UpdateError {
  		return new UpdateError('UpdateError: slug is Required');
  	}

    static notFound(): UpdateError {
    	return new UpdateError('UpdateError: slug not exists');
    }
	}

	export class DeleteError extends DefaultError {
    declare readonly name: string;
    declare readonly message: string;

  	constructor(message: string) {
    	super();
    	this.name = 'DeleteError';
    	this.message = message;
  	}

    static isRequired(): DeleteError {
  		return new DeleteError('DeleteError: slug is Required');
  	}

    static notFound(): DeleteError {
    	return new DeleteError('DeleteError: slug not exists');
    }
	}

	export class CreateError extends DefaultError {
		declare readonly name: string;
		declare readonly message: string;

		constructor(message: string) {
			super();
			this.name = 'CreateError';
			this.message = message;
		}

		static unexpectedError(): CreateError {
			return new CreateError('CreateError: unepected error');
		}
	}

}

