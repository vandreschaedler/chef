import { Test, TestingModule } from '@nestjs/testing';
import { IngredientsCategoriesController } from './ingredients-categories.controller';
import { IngredientsCategoriesService } from './ingredients-categories.service';

describe('IngredientsCategoriesController', () => {
  let controller: IngredientsCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IngredientsCategoriesController],
      providers: [IngredientsCategoriesService],
    }).compile();

    controller = module.get<IngredientsCategoriesController>(
      IngredientsCategoriesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
