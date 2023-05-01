import Styled from '@/pages/news/styled';
import Section from '@/components/hoc/Layout/Section';
import { getNews } from '@/pages/api';
import { groupNewsByCategory } from '@/helpers/utils';
import { ICategory } from '@/helpers/global.types';
import { useEffect, useState } from 'react';
import NewsList from '@/pages/news/NewsList';

export const getStaticProps = async () => {
  return getNews();
};
const News = (props: any) => {
  const [activeCategory, setActiveCategory] = useState('');

  const news: ICategory = groupNewsByCategory(props.entries);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  useEffect(() => {
    if (!Object.keys(news).length) return;
    setActiveCategory(Object.keys(news)[0] || '');
  }, []);

  return (
    <Section>
      <Styled.MainSection>
        <div className="container">
          <div className={'heading-wrapper'}>
            <h1>News</h1>
          </div>
          <div className="news-wrapper">
            <div className={'news-category-list-wrapper'}>
              <h3 className={'category-title'}>Categories</h3>
              <ul className={'news-category-list scrollbar'}>
                {news &&
                  Object.entries(news)?.map((newsItem, idx) => {
                    const [cat, news] = [newsItem[0], newsItem[1]];
                    return (
                      <li
                        onClick={() => handleCategoryClick(cat)}
                        className={`news-category-list-item ${
                          activeCategory === cat ? 'active' : ''
                        }`}
                        key={cat}
                      >
                        {cat}
                      </li>
                    );
                  })}
              </ul>
            </div>
            <NewsList news={news} activeCategory={activeCategory} />
          </div>
        </div>
      </Styled.MainSection>
    </Section>
  );
};

export default News;
