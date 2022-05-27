import http from 'https';
import { Response } from 'express';
import { exchangeRatesAPIConfig } from '../config/exchangeRatesAPI.config';
import { ExchangeRatesEndpoints } from '../enums/exchangeRatesEndpoints.enum';
import { exchangeRatesAPILogger } from '../utils/logger';
import { catchErrors } from '../middlewares/catchErrors';
import { AvailableCurrencies } from '../types/apiResponses.types';

export class ExchangeRatesService {
  readonly APIKey: string = exchangeRatesAPIConfig.apiKey;

  readonly APIDomain: string = exchangeRatesAPIConfig.domain;

  readonly endpoints: typeof ExchangeRatesEndpoints = ExchangeRatesEndpoints;

  private requestOptions = {
    method: 'GET',
    hostname: this.APIDomain,
    headers: { apikey: this.APIKey },
    path: exchangeRatesAPIConfig.pathPrefix,
  };

  static async parseResponse<T>(json: string): Promise<T> {
    return await JSON.parse(json);
  }

  getAvailableSymbols(res: Response) {
    this.requestAPI(res, this.endpoints.symbols);
  }

  private requestAPI(response: Response, path: ExchangeRatesEndpoints) {
    let data: string | Error = '';
    const options = this.requestOptions;
    options.path = options.path + path;
    const req = http.request(options, (res) => {
      res.on('data', (chunk) => {
        data = data + chunk;
      });

      res.on('end', async () => {
        if (typeof data === 'string') {
          const result =
            await ExchangeRatesService.parseResponse<AvailableCurrencies>(data);
          return response.status(200).json(result);
        }
      });
    });

    req.on('error', (e) => {
      exchangeRatesAPILogger.error(e);
      return catchErrors(e, response);
    });
    req.end();
  }
}
