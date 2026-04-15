import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Postagem } from '../entities/postagem.entity';
import { PostagemService } from './../services/postagem.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';

@ApiTags('Postagem')
@UseGuards(JwtAuthGuard)
@Controller('/postagem')
@ApiBearerAuth()
export class PostagemController {
  constructor(private readonly PostagemService: PostagemService) {}
  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Postagem[]> {
    return this.PostagemService.findAll();
  }
  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Postagem> {
    return this.PostagemService.findById(id);
  }
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() postagem: Postagem): Promise<Postagem> {
    return this.PostagemService.create(postagem);
  }
  @Get('/titulo/:titulo')
  @HttpCode(HttpStatus.OK)
  findAllByTitulo(@Param('titulo') titulo: string): Promise<Postagem[]> {
    return this.PostagemService.findAllByTitulo(titulo);
  }
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.PostagemService.delete(id);
  }
  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() postagem: Postagem): Promise<Postagem> {
    return this.PostagemService.update(postagem);
  }
}
