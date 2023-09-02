import { Request, Response } from 'express';
import { WelcomeHome } from '@default/app/use-cases/welcome-home.case-use';
import { responseOk } from '@shared/common/response';

export class HomeController {
  constructor(private readonly welcomeHome: WelcomeHome) {}

  welcome(req: Request, res: Response): void {
    responseOk(res, this.welcomeHome.welcome());
  }
}
