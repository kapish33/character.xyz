import { TypographyStyles } from '../types';
import { generateStyles } from './generateStyles';

export function createTypographyStyles(typoStyles: TypographyStyles): any {
  return generateStyles(typoStyles);
}