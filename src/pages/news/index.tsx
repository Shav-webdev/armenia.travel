import Styled from '@/pages/news/styled';
import Section from '@/components/hoc/Layout/Section';
import { getNews } from '@/pages/api';
import { groupNewsByCategory } from '@/helpers/utils';
import {ICategory, IObjectKeys} from '@/helpers/global.types';
import { useEffect, useState } from 'react';
import NewsList from '@/pages/news/NewsList';
import {pingBold, pingMedium} from '@/assets/fonts/fonts';
import CategoryList from "@/pages/news/CategoryList";

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
            <h1 className={`${pingBold.className}`}>News</h1>
          </div>
          <div className="news-wrapper">
            <div className={'news-category-list-wrapper'}>
              <h3 className={`category-title ${pingMedium.className}`}>Categories</h3>
              <CategoryList news={news} activeCategory={activeCategory} handleCategoryClick={handleCategoryClick}/>
            </div>
            <NewsList news={news} activeCategory={activeCategory} />
          </div>
        </div>
      </Styled.MainSection>
    </Section>
  );
};

export default News;
