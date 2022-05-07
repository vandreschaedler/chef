import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { IngredientsCategoriesService } from './ingredients-categories.service';
import { CreateIngredientsCategoryDto } from './dto/create-ingredients-category.dto';
import { UpdateIngredientsCategoryDto } from './dto/update-ingredients-category.dto';

@Controller('ingredients-categories')
export class IngredientsCategoriesController {
  constructor(
    private readonly ingredientsCategoriesService: IngredientsCategoriesService,
  ) {}

  @Post()
  create(@Body() createIngredientsCategoryDto: CreateIngredientsCategoryDto) {
    return this.ingredientsCategoriesService.create(
      createIngredientsCategoryDto,
    );
  }

  @Get()
  findAll() {
    return this.ingredientsCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ingredientsCategoriesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIngredientsCategoryDto: UpdateIngredientsCategoryDto,
  ) {
    return this.ingredientsCategoriesService.update(
      +id,
      updateIngredientsCategoryDto,
    );
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.ingredientsCategoriesService.remove(+id);
  // }
}
