import { Response, NextFunction } from 'express';
import AppError from '@shared/infra/shared.exception';
import { auditUsuario$ } from '@shared/common/audit';
import { USER } from '@shared/common/constants';

export function authorize(roles: string[]) {
  return (req: any, res: Response, next: NextFunction) => {
    const usuario = auditUsuario$.getValue();

    for (const role of roles) {
      if (!USER.ROLES.includes(role)) {
        throw new AppError(400, 'THE_ROLE_DO_NOT_EXIST', `The role [${role}] do not exisits.`);
      }
    }

    if (!roles.includes(usuario.role)) {
      throw new AppError(403, 'ITS_NOT_AUTHORIZED_!', 'This usuario is not authorized to use it');
    }

    next();
  };
}
