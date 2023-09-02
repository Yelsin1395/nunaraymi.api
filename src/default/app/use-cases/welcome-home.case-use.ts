import { HomeService } from '@default/core/domain/service/home.service.domain';
import { Home } from '@default/core/dto/home.dto';

export class WelcomeHome {
  constructor(private readonly homeService: HomeService) {}

  welcome(): Home {
    return this.homeService.index();
  }
}
