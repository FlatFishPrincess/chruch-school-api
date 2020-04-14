import { EntityRepository, Repository } from 'typeorm';

import Photo from '../entity/photo.entity';

@EntityRepository(Photo)
export class PhotoRepository extends Repository<Photo> {}
