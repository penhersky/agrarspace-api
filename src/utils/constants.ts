export const patterns = {
  name: new RegExp('^[A-Za-zА-Яа-я]'),
  password: new RegExp(
    '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})',
  ),
};

export const TOKEN_EXPIRATION = 1000 * 60 * 60;
