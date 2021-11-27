import { SecurityError } from '../../utils/apolloError';

export const comparePassword = async (
  compare: (data: string | Buffer, encrypted: string) => Promise<boolean>,
  inputPass: string,
  userPass: string,
) => {
  try {
    return await compare(inputPass, userPass);
  } catch (err: Error | unknown) {
    if (err instanceof Error) throw new SecurityError(err.message);
  }
};
