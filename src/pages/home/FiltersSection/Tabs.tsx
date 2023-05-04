import React, {useCallback, useEffect, useRef, useState} from "react";
import Tab from "@/components/Tab";
import {TABS} from "@/helpers/constants";
import {ITab, ITabName} from "@/helpers/global.types";
import {IActiveTab} from "@/pages/home/FiltersSection/index";

const Tabs = ({activeTab, handleSetActiveTab}: {activeTab: IActiveTab, handleSetActiveTab: Function}) => {
    const [currentTabPositions, setCurrentTabPositions] = useState({
        offsetWidth: 0,
        offsetTop: 0,
        offsetLeft: 0,
    });

    const tabsRef: React.MutableRefObject<any[]> = useRef([]);

    const setTabPosition = useCallback(() => {
        const currentTab = tabsRef.current[activeTab.index];

        setCurrentTabPositions({
            offsetWidth: currentTab?.offsetWidth ?? 0 ,
            offsetTop: currentTab?.offsetTop ?? 0,
            offsetLeft: currentTab?.offsetLeft ?? 0
        });
    }, [tabsRef?.current, activeTab?.index, tabsRef?.current[activeTab?.index]])

    const handleTabChange = (
        e: React.MouseEvent<HTMLDivElement>,
        activeTabName: ITabName,
        index: number,
    ) => {
        handleSetActiveTab({
            activeTabName,
            index,
        });
        setTabPosition();

    };

    useEffect(() => {
        setTabPosition();
    }, [activeTab.index, tabsRef.current, tabsRef.current[activeTab.index]]);


    useEffect(() => {
        window.addEventListener('loadstart', setTabPosition);

        return () => window.removeEventListener('loadstart', setTabPosition);
    }, []);

  return (
      <div className="tabs-wrapper">
          {TABS.map((tab: ITab, idx: number) => {
              return (
                  <Tab
                      idx={idx}
                      ref={tabsRef}
                      key={tab.tabName}
                      activeTab={activeTab.activeTabName}
                      handleTabChange={handleTabChange}
                      tabName={tab.tabName}
                      icon={tab.icon}
                      title={tab.title}
                  />
              );
          })}
          <div
              style={{
                  width: currentTabPositions.offsetWidth,
                  top: currentTabPositions.offsetTop,
                  left: currentTabPositions.offsetLeft,

              }}
              className={'tab'}
          ></div>
      </div>
  )
}

export default Tabs;
