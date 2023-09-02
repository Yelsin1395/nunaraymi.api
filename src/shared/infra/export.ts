import broker from './shared.broker';

// envs
import config from './config';

// exports
import home from '@default/infra/export';

export default { config, broker: broker({ homeRouterPublic: home.routerPublic }) };
