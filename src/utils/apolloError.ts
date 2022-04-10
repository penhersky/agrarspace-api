import { ApolloError } from 'apollo-server-koa';

export class DatabaseError extends ApolloError {
  constructor(message: string) {
    super(`Database Error: ${message}`, 'DATABASE_ERROR');

    Object.defineProperty(this, 'name', { value: 'DatabaseError' });
  }
}

export class SecurityError extends ApolloError {
  constructor(message: string) {
    super(`Security Error: ${message}`, 'SECURITY_ERROR');

    Object.defineProperty(this, 'name', { value: 'SecurityError' });
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
    super(`Organization: ${message}`, `ORGANIZATION_${type}`);

    Object.defineProperty(this, 'name', { value: 'DataCombinationError' });
  }
}
