import { FC } from 'react';
import { TypographyProps } from './types';
import { getColorClassNames, getVariantClassNames } from './utils';

const Typography: FC<TypographyProps> = ({
  className = '',
  variant = 'body',
  color = 'inherit',
  children,
  ...typographyProps
}) => {
  const variantClassNames = getVariantClassNames(variant);
  const colorClassNames = getColorClassNames(color);
  return (
    <p
      className={[className, variantClassNames, colorClassNames, 'flex'].join(
        ' ',
      )}
      {...typographyProps}
    >
      {children}
    </p>
  );
};

export default Typography;
