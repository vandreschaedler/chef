import { Module } from '@nestjs/common';
import { IngredientsCategoriesService } from './ingredients-categories.service';
import { IngredientsCategoriesController } from './ingredients-categories.controller';

@Module({
  controllers: [IngredientsCategoriesController],
  providers: [IngredientsCategoriesService],
})
export class IngredientsCategoriesModule {}
