import { Router } from 'express';

import PhotoController from './controllers/PhotoController';

const routes = Router();

routes.use("/photo", PhotoController);

export default routes;