import NextLink from 'next/link';
import { FC } from 'react';
import { Typography } from '../Typography';
import { LinkProps } from './types';

const Link: FC<LinkProps> = ({
  className,
  children,
  href,
  color = 'light',
  ...rest
}) => {
  const hoverColor =
    color === 'light'
      ? 'hover:decoration-gray-light'
      : 'hover:decoration-gray-dark';

  return (
    <NextLink
      href={href}
      className={[className, 'flex hover:underline', hoverColor].join(' ')}
      {...rest}
    >
      <Typography
        variant="button"
        color={color === 'light' ? 'buttonLight' : 'buttonDark'}
      >
        {children}
      </Typography>
    </NextLink>
  );
};

export default Link;
