import expressLoader from './server';
import { getDatabaseConfig } from '../configs/configs';
import { initializeDatabase } from './database';

export default async ({ expressApp }) => {

  const dbConfig = getDatabaseConfig();
  initializeDatabase(dbConfig);
  console.info('✌️ DB loaded and connected!');

  // const userModel = {
  //   name: 'userModel',
  //   // Notice the require syntax and the '.default'
  //   model: require('../models/user').default,
  // };

  // It returns the agenda instance because it's needed in the subsequent loaders
  // const { agenda } = await dependencyInjectorLoader({
  //   mongoConnection,
  //   models: [
  //     userModel,
  //     // salaryModel,
  //     // whateverModel
  //   ],
  // });
  // Logger.info('✌️ Dependency Injector loaded');

  // await jobsLoader({ agenda });
  // Logger.info('✌️ Jobs loaded');

  await expressLoader({ app: expressApp });
  console.info('✌️ Express loaded');
};
