import React, {useMemo, useState} from 'react';
import Styled from '@/pages/home/styled';
import { ITabName } from '@/helpers/global.types';
import Tabs from '@/pages/home/FiltersSection/Tabs';
import Section from '@/components/hoc/Layout/Section';
import {FILTER_TYPES} from "@/helpers/constants";
import Card from "@/pages/home/FiltersSection/Card";

export type IActiveTab = {
  activeTabName: ITabName;
  index: number;
};

const FiltersSection = () => {
  const [activeTab, setActiveTab] = useState<IActiveTab>({
    activeTabName: 'culture',
    index: 0,
  });

  const handleSetActiveTab = (activeTab: IActiveTab) => {
    setActiveTab(activeTab);
  };

  const filteredItems = useMemo(() => {
    return FILTER_TYPES.filter((type) => type.category === activeTab.activeTabName)
  }, [FILTER_TYPES, activeTab.activeTabName]);

  return (
    <Section>
      <Styled.FilterSection>
        <div className={'container'}>
          <Tabs activeTab={activeTab} handleSetActiveTab={handleSetActiveTab} />
          <Styled.FilteredItems>
            {
              filteredItems.map((item) => {
                return <Card key={item.title} {...item} />
              })
            }
          </Styled.FilteredItems>
        </div>
      </Styled.FilterSection>
    </Section>
  );
};

export default FiltersSection;
