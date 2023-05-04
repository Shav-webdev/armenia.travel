import { pingMedium } from '@/assets/fonts/fonts';
import { ICategory } from '@/helpers/global.types';
import CategoryListItem from '@/pages/news/CategoryList/CategoryListItem';

type CategoryListProps = {
  news: ICategory;
  handleCategoryClick: Function;
  activeCategory: string;
};
const CategoryList = ({
  news,
  activeCategory,
  handleCategoryClick,
}: CategoryListProps) => {
  return (
    <ul className={'news-category-list scrollbar'}>
      {news &&
        Object.entries(news)?.map((newsItem, idx) => {
          const [cat, news] = [newsItem[0], newsItem[1]];
          return (
            <CategoryListItem
              key={cat}
              activeCategory={activeCategory}
              handleCategoryClick={handleCategoryClick}
              cat={cat}
              idx={idx}
            />
          );
        })}
    </ul>
  );
};

export default CategoryList;
