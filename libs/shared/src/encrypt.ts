import bcrypt from 'bcrypt';

const SALT = process.env.PASSWORD_SALT || 10;

const hash = async (password: string) => {
  const salt = await bcrypt.genSalt(SALT as number);
  return bcrypt.hash(password, salt);
};

export default {
  hash,
  compare: bcrypt.compare,
};
