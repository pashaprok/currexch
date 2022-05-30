import { Response } from 'express';
import { exchangeRatesAPIConfig } from '../config/exchangeRatesAPI.config';
import { ExchangeRatesEndpoints } from '../enums/exchangeRatesEndpoints.enum';
import { exchangeRatesAPILogger } from '../utils/logger';
import { catchErrors } from '../middlewares/catchErrors';
import axios from 'axios';

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

  async getAvailableSymbols(res: Response) {
    const result = await this.requestAPI(this.endpoints.symbols);
    if (result instanceof Error) {
      exchangeRatesAPILogger.error(result);
      return catchErrors(result, res);
    }

    exchangeRatesAPILogger.info(JSON.stringify(result.data));
    return res.status(200).json(result.data);
  }

  async requestAPI(path: ExchangeRatesEndpoints) {
    return axios(
      `https://${this.requestOptions.hostname}${this.requestOptions.path}${path}`,
      {
        method: this.requestOptions.method,
        headers: this.requestOptions.headers,
      },
    );
  }
}
