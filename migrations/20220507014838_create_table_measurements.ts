import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('measuraments', function (table) {
    table.increments('id');
    table.string('name', 100).notNullable().unique();
    table.string('symbol', 10);
    table.enum('type', ['decimal', 'integer']);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('measurements');
}
