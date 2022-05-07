import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.raw('create extension if not exists "uuid-ossp"');

  await knex.schema.createTable('measurements', function (table) {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary();
    table.string('name', 100).notNullable().unique();
    table.string('symbol', 10);
    table.enum('type', ['decimal', 'integer']);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('measurements');
}
