// import database from './src/loaders/database';
// import server from "./src/loaders/server";
// import Logger from 'logger';
import express from 'express';

import { getServerConfig } from './configs/configs';

// referred architecture and configs Phttps://github.com/Talento90/organization-api

// Catch unhandling unexpected exceptions
// process.on('uncaughtException', (error) => {
//     console.error(`uncaughtException ${error.message}`);
// });

// // Catch unhandling rejected promises
// process.on('unhandledRejection', (reason) => {
//     console.error(`unhandledRejection ${reason}`);
// });

// const dbConfig = configs.getDatabaseConfig();
// const db = database.init(dbConfig);

// const serverConfig = configs.getServerConfig();
// const appServer = server.init(serverConfig, db);

// appServer.listen(process.env.PORT || serverConfig.port, () => {
//     console.log('Server running at:', serverConfig.port);
// });

async function startServer() {
  const app = express();

  /**
   * A little hack here
   * Import/Export can only be used in 'top-level code'
   * Well, at least in node 10 without babel and at the time of writing
   * So we are using good old require.
   **/
  await require('./loaders').default({ expressApp: app });

  const serverConfig = getServerConfig();
  app.listen(process.env.PORT || serverConfig.port, err => {
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

