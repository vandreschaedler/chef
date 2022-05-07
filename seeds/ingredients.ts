import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('ingredients').del();

  // Inserts seed entries
  await knex('ingredients').insert([
    {
      name: 'Arroz Branco',
      category_id: '4a42f4c3-c48b-4964-b8e1-02457641cba5',
    },
    {
      name: 'Feijão Preto',
      category_id: '4a42f4c3-c48b-4964-b8e1-02457641cba5',
    },
    { name: 'Rúcula', category_id: 'cda3c767-da73-4910-ac1b-08a188e1c555' },
    { name: 'Agrião', category_id: 'cda3c767-da73-4910-ac1b-08a188e1c555' },
    { name: 'Chuchu', category_id: 'cf8075ff-bec9-49d1-b2a4-692ea6083ca3' },
    { name: 'Pepino', category_id: 'cf8075ff-bec9-49d1-b2a4-692ea6083ca3' },
    {
      name: 'Farinha de Trigo',
      category_id: '1ae66e3e-da7c-4865-9501-8df265f249ca',
    },
    {
      name: 'Farinha de Mandioca',
      category_id: '1ae66e3e-da7c-4865-9501-8df265f249ca',
    },
    { name: 'Alecrim', category_id: 'df1cf598-baa3-4640-bd4a-f60d9261338e' },
    { name: 'Manjericão', category_id: 'df1cf598-baa3-4640-bd4a-f60d9261338e' },
    {
      name: 'Iogurte Natural',
      category_id: 'f5306b3d-5cc1-47c7-9196-0ff467606394',
    },
    {
      name: 'Leite Integral',
      category_id: 'f5306b3d-5cc1-47c7-9196-0ff467606394',
    },
    {
      name: 'Laranja Pêra',
      category_id: '2aff9397-aa07-4185-a641-78cde3fd95ca',
    },
    { name: 'Pêra', category_id: '2aff9397-aa07-4185-a641-78cde3fd95ca' },
    {
      name: 'Coxa de Frango',
      category_id: '955f4343-7ee0-4e82-ba04-d177fdf49f12',
    },
    { name: 'Maminha', category_id: '955f4343-7ee0-4e82-ba04-d177fdf49f12' },
    { name: 'Ovos', category_id: '279bf508-3d6f-4f2c-a0ee-fd5f1747db31' },
  ]);
}
