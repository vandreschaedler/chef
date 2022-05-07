import { Module } from '@nestjs/common';
import { KnexModule } from 'nest-knexjs';
import { IngredientsCategoriesModule } from './modules/ingredients-categories/ingredients-categories.module';
import { IngredientsModule } from './modules/ingredients/ingredients.module';

@Module({
  imports: [
    KnexModule.forRoot({
      config: {
        client: 'pg',
        version: '7.2',
        useNullAsDefault: true,
        connection: {
          host: '127.0.0.1',
          user: 'postgres',
          password: 'postgres',
          database: 'chef',
        },
      },
    }),
    IngredientsCategoriesModule,
    IngredientsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
