import 'reflect-metadata';

import { InversifyExpressServer } from 'inversify-express-utils';

import { getServerConfig } from './configs/configs';
import container from './inversify.config';

// referred architecture and configs Phttps://github.com/Talento90/organization-api

async function startServer() {
  /**
   * A little hack here
   * Import/Export can only be used in 'top-level code'
   * Well, at least in node 10 without babel and at the time of writing
   * So we are using good old require.
   **/


  const app = new InversifyExpressServer(container);
  app.setConfig(async (app) => {
    await require('./loaders').default({ expressApp: app });
  });
  const server = app.build();
  const serverConfig = getServerConfig();
  server.listen(process.env.PORT || serverConfig.port, err => {
    if (err) {
      // Logger.error(err);
      console.log(err);
      process.exit(1);
      return;
    }
    console.info(`
      ################################################
      🛡️  Server listening on port: ${serverConfig.port} 🛡️ 
      ################################################
    `);
  });
}

startServer();

