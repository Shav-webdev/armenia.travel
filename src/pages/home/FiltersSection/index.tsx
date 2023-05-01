import Section from '@/components/hoc/Layout/Section';
import Styled from '@/pages/home/styled';

const FiltersSection = () => {
  return (
    <Section>
      <Styled.FilterSection>
        <div>
          <div className="tabs-wrapper">
            <div className={'tab-item'}>
              <i className={'giz-museum'}></i>
              <span className={'tab-title'}>Cultural Heritage</span>
            </div>
            <div className={'tab-item'}>
              <i className={'giz-adventure-2'}></i>
              <span className={'tab-title'}>Nature And Adventures</span>
            </div>
            <div className={'tab-item'}>
              <i className={'giz-gastro-2'}></i>
              <span className={'tab-title'}>Culinary Scene</span>
            </div>
            <div className={'tab-item'}>
              <i className={'giz-lake'}></i>
              <span className={'tab-title'}>Leisure</span>
            </div>
            <div className={'tab'}></div>
          </div>
          <div className={'items-wrapper'}></div>
        </div>
      </Styled.FilterSection>
    </Section>
  );
};

export default FiltersSection;
