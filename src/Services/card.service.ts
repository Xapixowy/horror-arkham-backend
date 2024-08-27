import { Injectable } from '@nestjs/common';
import { CardDto } from '../Dtos/Card/card.dto';
import { ErrorEnum } from '../Enums/error.enum';

@Injectable()
export class CardService {
  private cards: CardDto[] = [];

  getAll(): CardDto[] {
    return this.cards;
  }

  get(id: number): CardDto {
    const existingCard = this.cards[id];
    if (!existingCard) {
      throw new Error(ErrorEnum.NOT_FOUND);
    }
    return this.cards[id];
  }

  add(card: CardDto): void {
    this.cards.push(card);
  }

  edit(id: number, card: CardDto): void {
    const existingCard = this.cards[id];
    if (!existingCard) {
      throw new Error(ErrorEnum.NOT_FOUND);
    }
    this.cards[id] = card;
  }

  remove(id: number): CardDto {
    const existingCard = this.cards[id];
    if (!existingCard) {
      throw new Error(ErrorEnum.NOT_FOUND);
    }
    this.cards.splice(id, 1);
    return existingCard;
  }
}
