import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('measurements').del();

  // Inserts seed entries
  await knex('measurements').insert([
    { name: 'kilograma', symbol: 'kg', type: 'decimal' },
    { name: 'litro', symbol: 'l', type: 'decimal' },
    { name: 'mililitro', symbol: 'ml', type: 'decimal' },
    { name: 'unidade', symbol: 'un', type: 'integer' },
    { name: 'grama', symbol: 'gr', type: 'decimal' },
    { name: 'pitada' },
    { name: 'à gosto' },
  ]);
}
