import { BehaviorSubject } from 'rxjs';

export interface IAuditUsuario {
  id: string;
  role: string;
}

export const auditSite$ = new BehaviorSubject<string>('');
export const auditUsuario$ = new BehaviorSubject<IAuditUsuario>({ id: '', role: '' });
