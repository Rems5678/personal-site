import { PropsWithChildren } from 'react';
import { LinkProps as NextLinkProps } from 'next/link';

export type LinkColor = 'light' | 'dark';

export interface LinkProps
  extends PropsWithChildren<{}>,
    NextLinkProps,
    Partial<Pick<HTMLAnchorElement, 'target'>> {
  className?: string;
  color?: LinkColor;
}
