import { TYPOGRAPHY_CLASSES } from './constants';
import { TypographyColor, TypographyVariant } from './types';

export const getVariantClassNames = (variant: TypographyVariant) => {
  switch (variant) {
    case 'header1': {
      return TYPOGRAPHY_CLASSES.header1;
    }
    case 'header2': {
      return TYPOGRAPHY_CLASSES.header2;
    }
    case 'header3': {
      return TYPOGRAPHY_CLASSES.header3;
    }
    case 'header4': {
      return TYPOGRAPHY_CLASSES.header4;
    }
    case 'header5': {
      return TYPOGRAPHY_CLASSES.header5;
    }
    case 'header6': {
      return TYPOGRAPHY_CLASSES.header6;
    }
    case 'bodySmall': {
      return TYPOGRAPHY_CLASSES.bodySmall;
    }
    case 'button': {
      return TYPOGRAPHY_CLASSES.button;
    }
    case 'caption': {
      return TYPOGRAPHY_CLASSES.caption;
    }
    case 'body':
    default:
      return TYPOGRAPHY_CLASSES.body;
  }
};

export const getColorClassNames = (color: TypographyColor) => {
  switch (color) {
    case 'dark': {
      return 'text-black';
    }
    case 'light': {
      return 'text-white';
    }
    case 'buttonLight': {
      return 'text-gray-light';
    }
    case 'buttonDark': {
      return 'text-gray-dark';
    }
    default: {
      return '';
    }
  }
};
