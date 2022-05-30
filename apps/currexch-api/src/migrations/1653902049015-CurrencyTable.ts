import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CurrencyTable1653902049015 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'currency',
        columns: [
          {
            name: 'id',
            type: 'serial',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
            length: '255',
          },
          {
            name: 'code',
            type: 'varchar',
            isNullable: false,
            length: '15',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('currency');
  }
}
