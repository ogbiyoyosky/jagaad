import { Router } from 'express';
import { ComponentRouterOptions } from '../../shared/types/ComponentRouterOptions';
import { ICityController } from './city.controller';

export function CityRouter(options: ComponentRouterOptions<ICityController, any>): Router {
  const { controller } = options;
  const router = Router();

  /**
   * @fetchCities- fetch cities
   */
  router.get('/forecasts', controller.fetchCitiesWithForecast);
  return router;
}
