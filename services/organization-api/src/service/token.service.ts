import { sign, verify } from 'jsonwebtoken';

import { JWT_SECRET } from '../utils/config';
import { IRefreshToken, ISessionToken } from '../types/token';
import { TOKEN } from '../utils/constants';

export const createRefreshToken = (data: IRefreshToken) => {
  return sign(data, JWT_SECRET as string, {
    algorithm: 'HS256',
    expiresIn: TOKEN.REFRESH_SESSION_TOKEN,
  });
};

export const createSessionToken = (data: ISessionToken, isAdmin?: boolean) => {
  return sign(data, JWT_SECRET as string, {
    algorithm: 'HS256',
    expiresIn: isAdmin ? TOKEN.ADMIN_SESSION_TOKEN : TOKEN.USER_SESSION_TOKEN,
  });
};

export const verifyToken = <T>(token: string): T | string => {
  try {
    return verify(token, JWT_SECRET as string) as T;
  } catch (err) {
    return 'Verification token error';
  }
};
