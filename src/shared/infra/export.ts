import broker from './shared.broker';

// envs
import config from './config';

// exports
import home from '@default/infra/export';
import kapuc from '@kapuc/infa/export';

export default {
  config,
  broker: broker({
    homeRouterPublic: home.routerPublic,
    kapucRouterPublic: kapuc.routerPublic,
    kapucRouterPrivate: kapuc.routerPrivate,
  }),
};
