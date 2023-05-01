import { INewsItem, INewsItemKey, IObjectKeys } from '@/helpers/global.types';

export const isClientMode = () => {
  return typeof window !== 'undefined';
};

export const groupNewsByCategory = (news: INewsItem[]) => {
  return news.reduce((categories: IObjectKeys, item: INewsItem) => {
    const key = item.Category as INewsItemKey;
    const category: string | number | INewsItem[] = categories[key] || [];
    if (Array.isArray(category)) category?.push(item);
    // @ts-ignore
    categories[item.Category as typeof key] = category;
    return categories;
  }, {});
};
