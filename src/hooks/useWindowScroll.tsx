import { useEffect, useState } from 'react';
import { isClientMode } from '@/helpers/utils';

export function useWindowScroll(delta: number = 50): 'show' | 'hide' | '' {
  const [position, setPosition] = useState(
    isClientMode() ? window?.pageYOffset : 0,
  );
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!isClientMode()) return;
    const handleScroll = () => {
      let moving = window.pageYOffset;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return !visible ? 'hide' : position > delta ? 'show' : '';
}
