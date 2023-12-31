// audit
import { auditSite$ } from '@shared/common/audit';

// use case
import { UsuarioQueryUseCase } from '@usuario/app/use-case/usuario-query.use-case';
import { UsuarioCreateUseCase } from '@usuario/app/use-case/usuario-create.use-case';
import { UsuarioAuthUseCase } from '@usuario/app/use-case/usuario-auth.use-case';

// model
import usuario from './database/model/usuario.model';

// repository
import { UsuarioRepositoryImpl } from './database/repository/usuario.repository';

// service
import { UsuarioServiceImpl } from './database/service/usuario.service';

// controller
import { UsuarioController } from './http/usuario.controller';

// routes
import routerPublic from './http/public/usuario.router';
import routerPrivate from './http/private/usuario.router';

// build
const usuarioRepository = new UsuarioRepositoryImpl(usuario, auditSite$);
const usuarioService = new UsuarioServiceImpl(usuarioRepository);
const usuarioQueryUseCase = new UsuarioQueryUseCase(usuarioService);
const usuarioCreateUseCase = new UsuarioCreateUseCase(usuarioService, auditSite$);
const usuarioAuthUseCase = new UsuarioAuthUseCase(usuarioService, auditSite$);
const usuarioController = new UsuarioController(
  usuarioQueryUseCase,
  usuarioCreateUseCase,
  usuarioAuthUseCase
);

export default {
  service: usuarioService,
  routerPublic: routerPublic({ usuarioController }),
  routerPrivate: routerPrivate({ usuarioController }),
};
