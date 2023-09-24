import { verify, sign } from 'jsonwebtoken';
import AppError from '@shared/infra/shared.exception';
import config from '@shared/infra/config';

const JWT_SECRET: string = config.JWT_SECRET ?? '';

export const jwtVerify = (token: string) => {
  let payload = null;

  verify(token, JWT_SECRET, function (error: any, decodedToken: any) {
    if (error) {
      throw new AppError(400, 'THE_TOKEN_IS_INVALID', 'The token provider is invalid.');
    }

    payload = decodedToken;
  });

  return payload;
};

export function generate(encode: any) {
  return sign(encode, JWT_SECRET, { expiresIn: '7d' });
}
