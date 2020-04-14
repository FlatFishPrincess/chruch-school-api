import Photo from 'entity/photo.entity';
import { inject, injectable, interfaces } from 'inversify';
import { FindManyOptions, FindOneOptions } from 'typeorm';

import TYPES from '../constant/types';

@injectable()
export class PhotoService {
  @inject(TYPES.PhotoRepository) private photoRepository;

  async findById(id: string): Promise<Photo | undefined> {
    return await this.photoRepository.findOne(id);
  }

  async findByfields(options: FindOneOptions<Photo>): Promise<Photo | undefined> {
    return await this.photoRepository.findOne(options);
  }

  async findAndCount(options: FindManyOptions<Photo>): Promise<[Photo[], number]> {
    return await this.photoRepository.findAndCount(options);
  }

  async save(photo: Photo): Promise<Photo | undefined> {
    return await this.photoRepository.save(photo);
  }

  async update(photo: Photo): Promise<Photo | undefined> {
    return await this.save(photo);
  }

  async delete(photo: Photo): Promise<Photo | undefined> {
    return await this.photoRepository.remove(photo);
  }
}