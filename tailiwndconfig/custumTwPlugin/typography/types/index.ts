export type TypographyStyles = {
  fontSize: number
  lineHeight: number
  letterSpacing?: number
  fontWeight: string
  fontStyle?: string
}

export type TypographyStylesAsString = {
  [key in keyof TypographyStyles]: string
}

type HeadingStylesAsNumber = {
  [key in keyof TypographyStyles]: number
}

export interface TypographyStylesKeyValue {
  [key: string]: HeadingStylesWithFontStyle;
}

export interface HeadingStylesWithFontStyle extends Omit<HeadingStylesAsNumber, 'fontStyle'> {
  fontStyle?: string | number;
}



export type CommonHeadingStyles = Omit<HeadingStylesAsNumber, 'letterSpacing'>
