import { customGetRequest } from '../../helpers/externalApiRequest';
import { BadRequestError } from '../../errors';
import apiRequest from '../../helpers/axios';
import logger from '../../logger';
import { ICity } from './city.interface';
import Env from '../../helpers/env';
export class CityService {
  /**
   * fetch films
   */
  async fetchCitiesWithForecast(): Promise<ICity[]> {
    try {
      const citiesResult = await customGetRequest('https://sandbox.musement.com/api/v3/cities', {});
      const citiesWeatherResult: any = await Promise.all(
        citiesResult.map(async (city) => {
          const weatherapiInfo: any = await customGetRequest(
            `http://api.weatherapi.com/v1/forecast.json?key=${Env.get('WEATHER_APIKEY')}=${city.latitude},${
              city.longitude
            }&days=2`,
            {},
          );
          console.log(
            `Processed city ${city.name}| ${weatherapiInfo.forecast.forecastday[0].day.condition.text} - ${weatherapiInfo.forecast.forecastday[1].day.condition.text} `,
          );
          return {
            id: city.id,
            name: city.name,
            weather_today: weatherapiInfo.forecast.forecastday[0].day.condition.text,
            weather_tomorrow: weatherapiInfo.forecast.forecastday[1].day.condition.text,
          };
        }),
      );

      return citiesWeatherResult;
    } catch (error) {
      logger.info(JSON.stringify(error));
      throw new BadRequestError('Unable to fetch cities');
    }
  }
}
