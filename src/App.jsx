import React, { useState } from 'react';
import LandingAsync from './features/Landing/LandingAsync';
import DiffAsync from './features/Diff/DiffAsync';
import Component from './components/Component/Component';
import Nav from './components/Nav/Nav';
import { cn } from '@bem-react/classname';

import './App.scss';

const cnApp = cn('App');

const App = () => {
  const [page, setPage] = useState('root');

  return (
    <div className={cnApp()}>
      <div className={cnApp('NavWrapper')}>
        <Nav className={cnApp('Nav')}>
          <Nav.Item onClick={() => setPage('root')}>Landing</Nav.Item>
          <Nav.Item onClick={() => setPage('diff')}>Difference</Nav.Item>
        </Nav>
      </div>
      <div className={cnApp('ContentWrapper')}>
        <div className={cnApp('Content')}>
          <Component enabled={page === 'root'} Feature={LandingAsync}/>
          <Component enabled={page === 'diff'} Feature={DiffAsync}/>
        </div>
      </div>
    </div>
  );
};

App.displayName = 'App';

export default App;

