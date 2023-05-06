import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `This will return one movie with the id: ${id}`;
  }

  @Post()
  create() {
    return 'This will create movie';
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return `This will delete movie with the id: ${id}`;
  }

  @Put('/:id')
  update(@Param('id') id: string) {
    return `This will update movie with the id: ${id}`;
  }
}
