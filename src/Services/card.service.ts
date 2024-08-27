import { Injectable } from '@nestjs/common';

@Injectable()
export class CardService {
  private cards: string[] = [];

  getAll() {
    return this.cards;
  }

  get(id: number) {
    return this.cards[id];
  }

  add(card: string) {
    this.cards.push(card);
  }

  remove(id: number) {
    this.cards.splice(id, 1);
  }
}
