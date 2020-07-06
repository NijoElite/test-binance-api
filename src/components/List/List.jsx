import React from 'react';
import { cn } from '@bem-react/classname';

import './List.scss';

const cnList = cn('List');

export const List = ({ children, className }) => {
  return <div className={cnList(null, [className])}>{children}</div>;
};

export const ListItem = ({ children }) => {
  return <div className={cnList('Item')}>{children}</div>;
};

