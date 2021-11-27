import { sign, verify } from 'jsonwebtoken';
import { JWT_SECRET } from './config';

export const getToken = (data: any, expiresIn = 0) => {
  return sign(data, JWT_SECRET as string, {
    algorithm: 'HS256',
    expiresIn,
  });
};

export const verifyToken = (token: string) => {
  try {
    return verify(token, JWT_SECRET as string);
  } catch (err) {
    throw Error('Invalid authentication token');
  }
};
