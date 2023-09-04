// service
import { HomeServiceImpl } from './database/service/home.service';

// use case
import { WelcomeHome } from '@default/app/use-cases/welcome-home.case-use';

// controller
import { HomeController } from './http/home.controller';

// routes
import routerPublic from './http/public/home.router';

// build
const homeService = new HomeServiceImpl();
const welcomeHome = new WelcomeHome(homeService);
const homeController = new HomeController(welcomeHome);

export default {
  routerPublic: routerPublic({ homeController }),
};
