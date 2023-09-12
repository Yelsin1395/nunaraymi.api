import { Router } from 'express';
import { UsuarioController } from '../usuario.controller';

interface IController {
  usuarioController: UsuarioController;
}

export default function ({ usuarioController }: IController) {
  const router = Router();

  router.post('/create', usuarioController.create.bind(usuarioController));

  return router;
}
