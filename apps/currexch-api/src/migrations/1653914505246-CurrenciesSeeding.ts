import { MigrationInterface, QueryRunner } from 'typeorm';
import { ExchangeRatesService } from '../services/exchangeRates.service';
import { ExchangeRatesEndpoints } from '../enums/exchangeRatesEndpoints.enum';
import { Currency } from '../entities/currency.entity';

export class CurrenciesSeeding1653914505246 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const response = await new ExchangeRatesService().requestAPI(
      ExchangeRatesEndpoints.symbols,
    );
    const currencies = response.data.symbols;

    for (const [code, name] of Object.entries(currencies)) {
      if (
        typeof code === 'string' &&
        typeof name === 'string' &&
        code !== 'TOP'
      ) {
        await queryRunner.manager.save(
          queryRunner.manager.create<Currency>(Currency, {
            code,
            name,
          }),
        );
      }
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE * FROM currency`);
  }
}
