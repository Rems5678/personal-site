import { PropsWithChildren } from 'react';

export type TypographyVariant =
  | 'header1'
  | 'header2'
  | 'header3'
  | 'header4'
  | 'header5'
  | 'header6'
  | 'body'
  | 'bodySmall'
  | 'button'
  | 'caption';

export type TypographyColor =
  | 'light'
  | 'dark'
  | 'buttonDark'
  | 'buttonLight'
  | 'inherit';

export interface TypographyProps extends PropsWithChildren<{}> {
  className?: string;
  variant?: TypographyVariant;
  color?: TypographyColor;
}
