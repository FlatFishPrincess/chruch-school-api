import { getDatabaseConfig } from '../configs/configs';
import { initializeDatabase } from './database';
import expressLoader from './server';

export default async ({ expressApp }) => {

  const dbConfig = getDatabaseConfig();
  await initializeDatabase(dbConfig);
  console.info('✌️ DB loaded and connected!');

  await expressLoader({ app: expressApp });
  console.info('✌️ Express loaded');
};
