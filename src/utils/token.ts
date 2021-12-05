import { sign, verify } from 'jsonwebtoken';

import { JWT_SECRET } from './config';

export const getToken = (data: any, expiresIn?: number) => {
  return sign(data, JWT_SECRET as string, {
    algorithm: 'HS256',
    ...(expiresIn ? { expiresIn } : {}),
  });
};

export const verifyToken = (token: string) => {
  try {
    return verify(token, JWT_SECRET as string);
  } catch (err) {
    throw Error('Invalid authentication token');
  }
};

export const USER_SESSION_TOKEN = 1000 * 60 * 60 * 5;
