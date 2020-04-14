import * as express from 'express';
import { inject, injectable } from 'inversify';
import {
  controller,
  httpDelete,
  httpGet,
  httpPost,
  interfaces,
  queryParam,
  request,
  requestParam,
  response,
} from 'inversify-express-utils';
import { PhotoService } from 'services/photo.service';

@controller("/")
export class PhotoController {
 
    constructor( @inject("PhotoService") private photoService: PhotoService ) {}
 
    @httpGet("/")
    private index(req: express.Request, res: express.Response, next: express.NextFunction): string {
        return 'test';
    }
 
    // @httpGet("/")
    // private index(req: express.Request, res: express.Response, next: express.NextFunction): string {
    //     return this.photoService.get(req.query.id);
    // }
 
    // @httpGet("/")
    // private list(@queryParam("start") start: number, @queryParam("count") count: number): string {
    //     return this.photoService.get(start, count);
    // }
 
    // @httpPost("/")
    // private async create(@request() req: express.Request, @response() res: express.Response) {
    //     try {
    //         await this.photoService.create(req.body);
    //         res.sendStatus(201);
    //     } catch (err) {
    //         res.status(400).json({ error: err.message });
    //     }
    // }
 
    // @httpDelete("/:id")
    // private delete(@requestParam("id") id: string, @response() res: express.Response): Promise<void> {
    //     return this.photoService.delete(id)
    //         .then(() => res.sendStatus(204))
    //         .catch((err: Error) => {
    //             res.status(400).json({ error: err.message });
    //         });
    // }
}