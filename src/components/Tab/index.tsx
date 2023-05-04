import React from 'react';
import { ITabName, ITab } from '@/helpers/global.types';
import { pingBold } from '@/assets/fonts/fonts';

interface ITabProps extends ITab {
  activeTab: ITabName;
  handleTabChange: Function;
  idx: number;
}

export type Ref = React.MutableRefObject<HTMLDivElement[]>;

const Tab = React.forwardRef<Ref[], ITabProps>(
  (
    { activeTab, tabName, handleTabChange, title, icon, idx }: ITabProps,
    tabsRef,
  ) => {
    return (
      <div
        ref={(el: HTMLDivElement) => {
          // @ts-ignore
          return tabsRef?.current[idx] = el
        }}
        className={`tab-item mobile-tab ${activeTab === tabName ? 'active' : ''} ${
          pingBold.className
        }`}
        onClick={(e) => handleTabChange(e, tabName, idx)}
      >
        {icon}
        <span className={'tab-title'}>{title}</span>
      </div>
    );
  },
);

export default Tab;
