import {
  IsArray,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';
import { LanguageEnum } from '../../Enums/language.enum';
import { CardTypeEnum } from '../../Enums/Card/card-type.enum';
import { CardSubtypeEnum } from '../../Enums/Card/card-subtype.enum';
import { Type } from 'class-transformer';
import { StatisticModifierDto } from '../statistic-modifier.dto';

export class CardDto {
  @IsEnum(LanguageEnum)
  @IsNotEmpty()
  locale: string;

  @IsEnum(CardTypeEnum)
  @IsNotEmpty()
  type: string;

  @IsEnum(CardSubtypeEnum)
  @IsNotEmpty()
  subtype: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsArray()
  @ValidateNested()
  @IsOptional()
  @Type(() => StatisticModifierDto)
  statisticModifiers: StatisticModifierDto[];

  @IsInt()
  @IsOptional()
  @Min(0)
  @Max(2)
  handUsage: number;
}
