import { PropsWithChildren } from 'react';
import { ImageProps as NextImageProps } from 'next/image';

export interface ImageProps extends PropsWithChildren<{}>, NextImageProps {
  className?: string;
  asChild?: boolean;
  ratio?: number;
}
