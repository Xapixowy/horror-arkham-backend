import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CardService } from '../Services/card.service';

@Controller('cards')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get()
  index() {
    return this.cardService.getAll();
  }

  @Get(':id')
  show(@Param('id') id: string) {
    return this.cardService.get(+id);
  }

  @Post()
  create(@Body() card: string) {
    this.cardService.add(card);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.cardService.remove(+id);
  }
}
