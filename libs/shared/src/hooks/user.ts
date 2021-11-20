import { TUser } from '../models/user';
import encrypt from '../utils/encrypt';

export const beforeCreateUpdate = async (user: TUser) => {
  if (user.password) {
    user.password = await encrypt.hash(user.password);
  }
};
