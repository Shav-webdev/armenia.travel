import React, { useEffect, useMemo, useState } from 'react';
import { isClientMode } from '@/helpers/utils';

export function useZoomImage(
  refElement: React.MutableRefObject<HTMLImageElement | null>,
) {
  const [position, setPosition] = useState(
    isClientMode() ? window?.pageYOffset : 0,
  );
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isClientMode() || !refElement?.current) return;
    const handleScroll = (e: Event) => {
      e.stopPropagation();
      let moving = refElement?.current?.getBoundingClientRect().top || 0;
      setVisible(moving <= 0 && moving >= -500);
      setPosition(moving);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [refElement.current]);

  const zoomImage = useMemo(() => {
    return visible ? 'show' : 'hide';
  }, [visible]);

  return { zoomImage, position };
}
