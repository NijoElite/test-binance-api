import React from 'react';
import { cn } from '@bem-react/classname';

import './Nav.scss';

const cnNav = cn('Nav');

const Nav = React.memo(({ className, children, ...restProps }) => {
  return (
    <div className={cnNav(null, [className])} {...restProps}>
      {children}
    </div>
  );
});

const NavItem = React.memo(({ children, ...restProps }) => {
  return (
    <div className={cnNav('Item')} {...restProps}>
      {children}
    </div>
  );
});

Nav.displayName = 'Nav';
NavItem.displayName = 'Nav-Item';

Nav.Item = NavItem;

export default Nav;
