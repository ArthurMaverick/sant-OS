import {ConnectionOptions, createConnection} from 'typeorm';
import {getConnectionOptions} from 'typeorm';

// Const connectionOptions = async (): Promise<ConnectionOptions> => getConnectionOptions();

export const initConnectionOnDb = async (): Promise<void> => {
	const connection = 	await	createConnection('default');
	await connection.synchronize();
};
