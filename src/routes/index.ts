import { Request, Response, Router } from 'express';

import photo from './photo';

const routes = Router();

routes.use("/photo", photo);
// routes.use("/auth", auth);
// routes.use("/user", user);

export default routes;