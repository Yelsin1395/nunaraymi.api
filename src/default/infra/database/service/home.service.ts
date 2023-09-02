import { HomeService } from '@default/core/domain/service/home.service.domain';
import { Home } from '@default/core/dto/home.dto';
import pkg from 'package.json';

export class HomeServiceImpl implements HomeService {
  index(): Home {
    return {
      name: pkg.name,
      author: pkg.author,
      version: pkg.version,
      description: pkg.description,
    };
  }
}
