import React, { useCallback } from 'react';
import { cn } from '@bem-react/classname';

const cnLink = cn('Link');

const Link = ({ preventDefault, className, children, ...restProps }) => {
  const onClick = useCallback(e => {
    e.preventDefault();
  }, []);

  restProps.onClick = preventDefault ? onClick : restProps.onClick;

  return <a className={cnLink({}, [className])} {...restProps}>{children}</a>;
};

export default Link;
