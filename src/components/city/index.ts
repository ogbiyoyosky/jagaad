import { CityControllerFactory } from './city.controller';
import { CityRouter } from './city.router';
import { CityService } from './city.service';

export const Service = new CityService();

export const cityController = CityControllerFactory(Service);

export const cityRouter = CityRouter({
  controller: cityController,
});
