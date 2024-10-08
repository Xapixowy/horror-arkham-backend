import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { StatisticModifier } from '@Types/Card/statistic-modifier.type';
import { Language } from '@Enums/language';

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 255,
  })
  name: string;

  @Column({
    type: 'text',
  })
  description: string;

  @Column({
    type: 'varchar',
    length: 64,
  })
  type: string;

  @Column({
    type: 'varchar',
    length: 64,
    nullable: true,
  })
  subtype: string;

  @Column({
    type: 'json',
    nullable: true,
  })
  statistic_modifiers: StatisticModifier[];

  @Column({
    type: 'integer',
    nullable: true,
  })
  hand_usage: number;

  @Column({
    type: 'text',
    nullable: true,
  })
  image_path: string;

  @Column({
    type: 'varchar',
    length: 2,
  })
  locale: Language;
}
