import React from 'react';
import { cn } from '@bem-react/classname';

import './Table.scss';

const cnTable = cn('Table');

export const Table = ({ children, className, ...restProps }) => {
  return (
    <div className={cnTable(null, [className])} {...restProps}>
      <table className={cnTable('Root')}>
        {children}
      </table>
    </div>
  );
};

export const TableHead = ({ children, ...restProps }) => {
  return <thead className={cnTable('Head')} {...restProps}> {children}</thead>;
};

export const TableHeadCell = ({ children, ...restProps }) => {
  return <th className={cnTable('HeadCell')} {...restProps}>{children}</th>;
};

export const TableRow = ({ children, ...restProps }) => {
  return <tr className={cnTable('Row')} {...restProps}>{children}</tr>;
};

export const TableCell = ({ children, color, align = 'center', borderLeft, borderRight, borderBottom, borderTop, ...restProps }) => {
  return <td className={cnTable('Cell', { color, align, borderLeft, borderRight, borderBottom, borderTop })} {...restProps}>{children}</td>;
};

export const TableBody = ({ children, ...restProps }) => {
  return <tbody className={cnTable('Body')} {...restProps}>{children}</tbody>;
};
