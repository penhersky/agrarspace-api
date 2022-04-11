import { ApolloError } from 'apollo-server-koa';

import { ERROR } from './constants';

export class DatabaseError extends ApolloError {
  constructor(message: string) {
    super(`Database Error: ${message}`, 'DATABASE_ERROR');

    Object.defineProperty(this, 'name', { value: 'DatabaseError' });
  }
}

export class SecurityError extends ApolloError {
  constructor(message: string, type?: string) {
    super(
      `Security Error: ${message}`,
      `SECURITY_ERROR${type ? `@${type}` : ''}`,
    );

    Object.defineProperty(this, 'name', { value: 'SecurityError' });
  }
}

export class AuthenticationError extends ApolloError {
  constructor(message: string, type?: string) {
    super(
      `Authentication Error: ${message}`,
      `${ERROR.ACCESS_DENIED}${type ? `@${type}` : ''}`,
    );

    Object.defineProperty(this, 'name', { value: 'Authentication Error' });
  }
}

export class DataCombinationError extends ApolloError {
  constructor(message: string) {
    super(`Data Combination: ${message}`, 'DATA_OUTPUT_ERROR');

    Object.defineProperty(this, 'name', { value: 'DataCombinationError' });
  }
}

// organization
export class OrganizationError extends ApolloError {
  constructor(message: string, type: string) {
    super(`Organization: ${message}`, `ORGANIZATION@${type}`);

    Object.defineProperty(this, 'name', { value: 'DataCombinationError' });
  }
}
