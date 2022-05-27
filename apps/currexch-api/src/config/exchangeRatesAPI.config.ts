export const exchangeRatesAPIConfig = {
  apiKey: process.env.EXCHANGE_RATES_API_KEY || 'api-key',
  domain: process.env.EXCHANGE_RATES_API_DOMAIN || 'domain-string',
  pathPrefix: process.env.EXCHANGE_RATES_API_PATH_PREFIX || 'path-prefix',
};
