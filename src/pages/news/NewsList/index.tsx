import { ICategory, INewsItem } from '@/helpers/global.types';
import NewsListItem from '@/pages/news/NewsList/NewsListItem';

const NewsList = ({
  news,
  activeCategory,
}: {
  news: ICategory;
  activeCategory: string;
}) => {
  return (
    <div className={'news-list scrollbar'}>
      {news[activeCategory]?.map((newsItem: INewsItem, idx, array) => (
        <NewsListItem key={`${newsItem.Link}`} newsItem={newsItem} idx={idx} />
      ))}
    </div>
  );
};

export default NewsList;
