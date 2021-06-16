import { Request, Response, NextFunction, RequestHandler } from 'express';
import httpStatus from 'http-status';
import logger from '../../logger';
import { CityService } from './city.service';


export interface ICityController {
  fetchCitiesWithForecast: RequestHandler;
}

export function CityControllerFactory(cityService: CityService): ICityController {
  return {
    /**
     * Fetch cities with weather forecast.
     */
    async fetchCitiesWithForecast(req: Request, res: Response, next: NextFunction): Promise<any> {
      try {
        const cities = await cityService.fetchCitiesWithForecast();
        //logger.info(JSON.stringify(films))
        return res.status(httpStatus.OK).json({
          message: 'Successfully fetch cities',
          status: 'success',
          statusCode: httpStatus.OK,
          data: cities,
        });
      } catch (error) {
        logger.info(error);
        next(error);
      }
    },
  };
}
