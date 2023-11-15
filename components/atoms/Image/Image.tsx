'use client';

import { FC } from 'react';
import { ImageProps } from './types';
import { Root } from '@radix-ui/react-aspect-ratio';
import NextImage from 'next/image';

const Image: FC<ImageProps> = ({
  className,
  children,
  ratio,
  ...imageProps
}) => {
  return (
    <Root asChild ratio={ratio}>
      <NextImage className={[className, 'flex'].join(' ')} fill {...imageProps}>
        {children}
      </NextImage>
    </Root>
  );
};

export default Image;
