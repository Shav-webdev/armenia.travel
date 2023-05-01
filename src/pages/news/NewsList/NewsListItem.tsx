import Link from 'next/link';
import { INewsItem } from '@/helpers/global.types';
import React, { useEffect, useState } from 'react';

const NewsListItem = ({
  newsItem,
  idx,
}: {
  newsItem: INewsItem;
  idx: number;
}) => {
  const [animate, setAnimate] = useState(false);

  let timerId: null | ReturnType<typeof setTimeout> = null;

  useEffect(() => {
    timerId = setTimeout(() => {
      setAnimate(true);
    }, idx * 200);

    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, []);

  return (
    <Link
      className={`news-item fade-item ${animate ? 'fadein' : ''}`}
      href={newsItem.Link}
      target={'_blank'}
    >
      <div>
        <h2>{newsItem.API}</h2>
      </div>
      <div>
        <h2>{newsItem.Description}</h2>
      </div>
    </Link>
  );
};

export default NewsListItem;
