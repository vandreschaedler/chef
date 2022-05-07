import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('ingredients_categories', function (table) {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary();
    table.string('name', 100).notNullable().unique();
    table.string('description', 255);
  });

  await knex.schema.createTable('ingredients', function (table) {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary();
    table.string('name', 100).notNullable().unique();
    table.string('description', 255);
    table
      .uuid('category_id')
      .references('ingredients_categories.id')
      .notNullable();
    table.text('history');
    table.text('image');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('ingredients');
  await knex.schema.dropTable('ingredients_categories');
}
