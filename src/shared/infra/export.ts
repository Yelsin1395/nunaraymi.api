import broker from './shared.broker';

// envs
import config from './config';

// exports
import home from '@default/infra/export';
import kapuc from '@kapuc/infa/export';
import kamachiq from '@kamachiq/infra/export';
import usuario from '@usuario/infra/export';
import ruwana from '@ruwana/infra/export';

export default {
  config,
  broker: broker({
    homeRouterPublic: home.routerPublic,
    kapucRouterPublic: kapuc.routerPublic,
    kapucRouterPrivate: kapuc.routerPrivate,
    kamachiqPublic: kamachiq.routerPublic,
    kamachiqPrivate: kamachiq.routerPrivate,
    usuarioPublic: usuario.routerPublic,
    usuarioPrivate: usuario.routerPrivate,
    ruwanaPublic: ruwana.routerPublic,
    ruwanaPrivate: ruwana.routerPrivate,
  }),
};
