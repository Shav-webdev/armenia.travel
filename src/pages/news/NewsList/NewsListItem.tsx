import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { INewsItem } from '@/helpers/global.types';
import {pingBold, pingMedium} from '@/assets/fonts/fonts';

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
      <div className={'card-header'}>
        <h2 className={`card-title ${pingBold.className}`}>{newsItem.API}</h2>
      </div>
      <div className={'card-body'}>
        <p className={`${pingMedium.className} card-description`}>{newsItem.Description}</p>
      </div>
    </Link>
  );
};

export default NewsListItem;
