// audit
import { auditSite$ } from '@shared/common/audit';

// use case
import { KamachiqQueryUseCase } from '@kamachiq/app/use-case/kamachiq-query.use-case';
import { KamachiqCreateUseCase } from '@kamachiq/app/use-case/kamachiq-create.use-case';

// model
import kamachiq from './database/model/kamachiq.model';

// repository
import { KamachiqRepositoryImpl } from './database/repository/kamachiq.repository';

// service
import { KamachiqServiceImpl } from './database/service/kamachiq.service';

// controller
import { KamachiqController } from './http/kamachiq.controller';

// routes
import routerPublic from './http/public/kamachiq.router';
import routerPrivate from './http/private/kamachiq.router';

// build
const kamachiqRepository = new KamachiqRepositoryImpl(kamachiq, auditSite$.getValue());
const kamachiqService = new KamachiqServiceImpl(kamachiqRepository);
const kamachiqQueryUseCase = new KamachiqQueryUseCase(kamachiqService);
const kamachiqCreateUseCase = new KamachiqCreateUseCase(kamachiqService, auditSite$.getValue());
const kamachiqController = new KamachiqController(kamachiqQueryUseCase, kamachiqCreateUseCase);

export default {
  service: kamachiqService,
  routerPublic: routerPublic({ kamachiqController }),
  routerPrivate: routerPrivate({ kamachiqController }),
};
