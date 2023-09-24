import { BehaviorSubject } from 'rxjs';

export const auditSite$ = new BehaviorSubject<string>('');
export const auditUsuario$ = new BehaviorSubject<any>({});
