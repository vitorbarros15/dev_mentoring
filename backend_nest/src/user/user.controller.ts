import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('exemplo')
export class ExemploController {
  @Get()
  getHello(): string {
    return 'Olá, NestJS!';
  }

  @Post()
  createData(@Body() data: any): string {
    return `Dados recebidos: ${JSON.stringify(data)}`;
  }
}
