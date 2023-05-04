import { pingMedium } from '@/assets/fonts/fonts';
import { ICategory } from '@/helpers/global.types';
import { useEffect, useState } from 'react';

type CategoryListItemProps = {
  cat: string;
  idx: number;
  handleCategoryClick: Function;
  activeCategory: string;
};
const CategoryListItem = ({
  handleCategoryClick,
  activeCategory,
  cat,
  idx,
}: CategoryListItemProps) => {
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
    <li
      onClick={() => handleCategoryClick(cat)}
      className={`news-category-list-item fade-item ${
        activeCategory === cat ? 'active' : ''
      } ${pingMedium.className} ${animate ? 'fadein' : ''}`}
    >
      {cat}
    </li>
  );
};

export default CategoryListItem;
