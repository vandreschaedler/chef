import { PartialType } from '@nestjs/mapped-types';
import { CreateIngredientsCategoryDto } from './create-ingredients-category.dto';

export class UpdateIngredientsCategoryDto extends PartialType(
  CreateIngredientsCategoryDto,
) {}
