import React, { useState } from 'react';
import { cn } from '@bem-react/classname';

import './Component.scss';

const cnComponent = cn('Component');

const Component = ({ Feature, enabled, className }) => {
  const [wasTouched, setTouched] = useState(Boolean(enabled));

  if (enabled && !wasTouched) {
    setTouched(true);
  }

  if (!wasTouched) return null;

  return <div className={cnComponent({ enabled }, [className])}><Feature enabled={enabled} /></div>;
};

export default Component;
