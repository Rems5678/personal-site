'use client';

import { FC } from 'react';
import { DividerProps } from './types';
import { Root } from '@radix-ui/react-separator';

const Divider: FC<DividerProps> = ({
  className,
  children,
  orientation,
  color = 'secondary',
  ...separatorProps
}) => {
  const height = orientation === 'vertical' ? 'h-full' : 'h-[2px]';
  const width = orientation === 'horizontal' ? 'w-full' : 'w-[2px]';

  return (
    <Root asChild orientation={orientation} {...separatorProps}>
      <div
        className={['flex', `bg-${color}`, height, width, className].join(' ')}
      >
        {children}
      </div>
    </Root>
  );
};

export default Divider;
