import { Test, TestingModule } from '@nestjs/testing';
import { IngredientsCategoriesService } from './ingredients-categories.service';

describe('IngredientsCategoriesService', () => {
  let service: IngredientsCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IngredientsCategoriesService],
    }).compile();

    service = module.get<IngredientsCategoriesService>(
      IngredientsCategoriesService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
