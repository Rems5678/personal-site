import { FC } from 'react';
import { __component__Props } from './types';

const __component__: FC<__component__Props> = ({ className }) => {
  return <div className={[className, 'flex'].join(' ')}></div>;
};

export default __component__;
