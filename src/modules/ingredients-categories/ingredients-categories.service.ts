import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
import { CreateIngredientsCategoryDto } from './dto/create-ingredients-category.dto';
import { UpdateIngredientsCategoryDto } from './dto/update-ingredients-category.dto';

@Injectable()
export class IngredientsCategoriesService {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async create(createIngredientsCategoryDto: CreateIngredientsCategoryDto) {
    try {
      const inserted = await this.knex
        .table('ingredients_categories')
        .insert(createIngredientsCategoryDto)
        .returning('*');

      return inserted[0];
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  findAll() {
    return this.knex.table('ingredients_categories');
  }

  async findOne(id: string) {
    const found = await this.knex
      .table('ingredients_categories')
      .where('id', id);
    if (!found) {
      throw new NotFoundException(`User ${id} does not exist`);
    }
    return found[0];
  }

  async update(
    id: number,
    updateIngredientsCategoryDto: UpdateIngredientsCategoryDto,
  ) {
    try {
      const updated = await this.knex
        .table('ingredients_categories')
        .where('id', id)
        .update({
          firstName: updateIngredientsCategoryDto.name,
          lastName: updateIngredientsCategoryDto.description,
        });

      return { updated };
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  // remove(id: number) {
  //   return `This action removes a #${id} ingredientsCategory`;
  // }
}
