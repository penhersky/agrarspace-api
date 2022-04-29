import { ApolloError } from 'apollo-server-koa';

export class AppError extends ApolloError {
  constructor(message: string, cose: string, subCode?: string, params?: any) {
    super(message, `${cose}${subCode ? `@${subCode}` : ''}`);

    Object.defineProperty(this, 'name', params || {});
  }

  static database(message?: string) {
    throw new AppError(`Database Error: ${message}`, 'DATABASE_ERROR');
  }

  static security(message?: string) {
    throw new AppError(`Security Error: ${message}`, 'SECURITY_ERROR');
  }

  static authentication(
    message?: string,
    type?: 'TOKEN_EXPIRED' | 'NEED_REAUTHENTICATE',
  ) {
    throw new AppError(
      `Authentication Error: ${message}`,
      'AUTHENTICATION_ERROR',
      type || 'TOKEN_EXPIRED',
    );
  }

  static lackOfData(message?: string, code?: string) {
    throw new AppError(`Lack of data: ${message}`, 'LACK_OF_DATA', code);
  }

  static userInput(message?: string, data?: any) {
    throw new AppError(
      `User Input Error: ${message}`,
      'USER_INPUT_ERROR',
      undefined,
      data,
    );
  }

  static unexpected(message?: string) {
    throw new AppError(
      `Internal Server Error: ${message}`,
      'INTERNAL_SERVER_ERROR',
    );
  }
}
