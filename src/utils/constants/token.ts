import { isDevelopment } from '../config';

export const ADMIN_SESSION_TOKEN = 1000 * 60 * 60 * 1;
export const USER_SESSION_TOKEN = 1000 * 60 * 60 * 3;
export const REFRESH_SESSION_TOKEN =
  1000 * 60 * 60 * 24 * (isDevelopment ? 365 : 3);
