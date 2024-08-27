import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CardService } from '../Services/card.service';
import { CardDto } from '../Dtos/Card/card.dto';
import { ResponseHelper } from '../Helpers/response.helper';
import { Response } from '../Types/response.type';

@Controller('cards')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get()
  index(): Response<CardDto[]> {
    try {
      return ResponseHelper.buildResponse(this.cardService.getAll());
    } catch (error) {
      ResponseHelper.handleError(error.message);
    }
  }

  @Get(':id')
  show(@Param('id') id: string): Response<CardDto> {
    try {
      return ResponseHelper.buildResponse(this.cardService.get(+id));
    } catch (error) {
      ResponseHelper.handleError(error.message);
    }
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() card: CardDto): void {
    try {
      this.cardService.add(card);
    } catch (error) {
      ResponseHelper.handleError(error.message);
    }
  }

  @Put(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  update(@Param('id') id: string, @Body() editedCard: CardDto): void {
    try {
      this.cardService.edit(+id, editedCard);
    } catch (error) {
      ResponseHelper.handleError(error);
    }
  }

  @Delete(':id')
  delete(@Param('id') id: string): Response<CardDto> {
    try {
      return ResponseHelper.buildResponse(this.cardService.remove(+id));
    } catch (error) {
      ResponseHelper.handleError(error.message);
    }
  }
}
