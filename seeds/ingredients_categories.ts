import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('ingredients_categories').del();

  await knex('ingredients_categories').insert([
    { name: 'Vegetais' },
    { name: 'Frutas' },
    { name: 'Legumes' },
    { name: 'Grãos' },
    { name: 'Farinhas' },
    { name: 'Temperos' },
    { name: 'Carnes' },
    { name: 'Laticínios' },
    { name: 'Outros' },
  ]);
}
