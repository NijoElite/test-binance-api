import React from 'react';
import { cn } from '@bem-react/classname';

import './KeyValue.scss';

const cnKeyValue = cn('KeyValue');

const KeyValue = React.memo(({ head, value, className }) => {
  return (
    <div className={cnKeyValue('', className)}>
      <div className={cnKeyValue('Key')}>{head}</div>
      <div className={cnKeyValue('Value')}>{value}</div>
    </div>
  );
});

KeyValue.displayName = 'KeyValue';


export default KeyValue;
