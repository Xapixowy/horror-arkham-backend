import { StatisticModifier } from '../../Types/statistic-modifier.type';

export class CreateCardDto {
  locale: string;
  type: string;
  subtype: string;
  name: string;
  description: string;
  statisticModifiers: StatisticModifier[];
  handUsage: number;
}
