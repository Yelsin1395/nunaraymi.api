// audit
import { auditSite$, auditUsuario$ } from '@shared/common/audit';

// use case
import { RuwanaQueryUseCase } from '@ruwana/app/use-case/ruwana-query.use-case';
import { RuwanaCreateUseCase } from '@ruwana/app/use-case/ruwana-create.use-case';

// model
import ruwana from './database/model/ruwana.model';

// repository
import { RuwanaRepositoryImpl } from './database/repository/ruwana.repository';

// service
import { RuwanaServiceImpl } from './database/service/ruwana.service';

// controller
import { RuwanaController } from './http/ruwana.controller';

// routes
import routerPublic from './http/public/ruwana.router';
import routerPrivate from './http/private/ruwana.router';

// build

const ruwanaRepository = new RuwanaRepositoryImpl(ruwana, auditSite$, auditUsuario$);
const ruwanaService = new RuwanaServiceImpl(ruwanaRepository);
const ruwanaQueryUseCase = new RuwanaQueryUseCase(ruwanaService);
const ruwanaCreateUseCase = new RuwanaCreateUseCase(ruwanaService, auditSite$, auditUsuario$);
const ruwanaController = new RuwanaController(ruwanaQueryUseCase, ruwanaCreateUseCase);

export default {
  service: ruwanaService,
  routerPublic: routerPublic({ ruwanaController }),
  routerPrivate: routerPrivate({ ruwanaController }),
};
