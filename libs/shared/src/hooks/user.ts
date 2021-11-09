import { User } from '../models/user';
import encrypt from '../encrypt';

export const beforeCreateUpdate = async (user: User) => {
  if (user.password) {
    user.password = await encrypt.hash(user.password);
  }
};
