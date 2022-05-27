import { Request, Response } from 'express';
import { ExchangeRatesService } from '../services/exchangeRates.service';

export function availableRates(req: Request, res: Response) {
  return new ExchangeRatesService().getAvailableSymbols(res);
}
