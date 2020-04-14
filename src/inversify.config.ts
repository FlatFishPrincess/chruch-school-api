import './api/controllers/PhotoController';

import { Container } from 'inversify';

import TYPES from './constant/types';
import { PhotoRepository } from './repository/PhotoRepository';
import { PhotoService } from './services/photo.service';

const container = new Container();

container.bind<PhotoService>(TYPES.PhotoService).to(PhotoService);
container.bind<PhotoRepository>(TYPES.PhotoRepository).to(PhotoRepository);

export default container;