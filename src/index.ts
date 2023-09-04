import express from 'express';
import clc from 'cli-color';
import figlet from 'figlet';

import '@shared/infra/load-env-vars';
import cloudConnectionMongoDb from '@shared/infra/database/connection/mongodb.connection';
import pkg from 'package.json';
import shared from '@shared/infra/export';

async function boostrap() {
  const app = express().use(shared.broker);
  const PORT = process.env.PORT || 4000;

  // Connection mongodb
  await cloudConnectionMongoDb();

  // Start app
  app.listen(PORT, () => {
    figlet('JESUSYELSINBROLY', (error, result) => {
      console.log(error || result);
    });

    if (process.env.NODE_ENV !== 'production') {
      const route = () => `http://localhost:${PORT}`;
      console.log(`Hello, your app is ready on ${route()}`);
      console.log('To shut it down, press <CTRL> + C at any time.');
      console.log(clc.greenBright('-------------------------------------------------------'));
      console.log(clc.greenBright(`Environment  : ${process.env.NODE_ENV}`));
      console.log(clc.greenBright(`App name     : ${pkg.name}`));
      console.log(clc.greenBright(`Version      : ${pkg.version}`));
      console.log(clc.greenBright(`Author api   : ${pkg.author}`));
      console.log(clc.greenBright(`API Info     : ${route()}`));
      console.log(clc.greenBright('-------------------------------------------------------'));
    } else {
      console.log(`${pkg.name} running on port ${PORT}`);
    }
  });
}

boostrap();
