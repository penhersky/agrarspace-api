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
    return 'Verification token error';
  }
};
