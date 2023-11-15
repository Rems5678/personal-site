import { SeparatorProps } from '@radix-ui/react-separator';
import { PropsWithChildren } from 'react';

export interface DividerProps extends PropsWithChildren<{}>, SeparatorProps {
  className?: string;
  color?: 'secondary' | 'white';
}
