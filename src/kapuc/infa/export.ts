// use case
import { KapucQueryUseCase } from '@kapuc/app/use-case/kapuc-query.use-case';
import { KapucCreateUseCase } from '@kapuc/app/use-case/kapuc-create.use-case';

// modes
import kapucModel from './database/model/kapuc.model';

// repository
import { KapucRepositoryImpl } from './database/repository/kapuc.repository';

// Service
import { KapucServiceImpl } from './database/service/kapuc.service';

// controller
import { KapucController } from './http/kapuc.controller';

// routes
import routerPublic from './http/public/kapuc.router';
import routerPrivate from './http/private/kapuc.router';

// build
const kapucRepository = new KapucRepositoryImpl(kapucModel);
const kapucService = new KapucServiceImpl(kapucRepository);
const kapucQueryUseCase = new KapucQueryUseCase(kapucService);
const kapucCreateUseCase = new KapucCreateUseCase(kapucService);
const kapucController = new KapucController(kapucQueryUseCase, kapucCreateUseCase);

export default {
  routerPublic: routerPublic({ kapucController }),
  routerPrivate: routerPrivate({ kapucController }),
};
