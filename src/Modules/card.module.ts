import { Module } from '@nestjs/common';
import { CardController } from '../Controllers/card.controller';
import { CardService } from '../Services/card.service';

@Module({
  controllers: [CardController],
  providers: [CardService],
})
export class CardModule {}
