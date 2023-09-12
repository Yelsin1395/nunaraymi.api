import { Router } from 'express';
import { UsuarioController } from '../usuario.controller';

interface IController {
  usuarioController: UsuarioController;
}

export default function ({ usuarioController }: IController) {
  const router = Router();

  router.get('/:id', usuarioController.findById.bind(usuarioController));

  return router;
}
