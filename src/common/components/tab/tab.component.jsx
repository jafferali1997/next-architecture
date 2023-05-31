'use client';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TabHook from './tab.hook';

function Tab({ tabs }) {
  const [completedTab, setCompletedTab] = useState([]);
  const {
    activeTab,
    setActiveTab,
    // completedTab,
    // setCompletedTab,
    handleTabClick,
    resetTabCompleted,
    Component
  } = TabHook;
  return (
    <div className="tabs">
      <div className="tab-navigation">
        {/* {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab ${tab.id === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </div>
        ))} */}
        {tabs.map((tab) => (
          <>
            <div
              key={tab.id}
              className={`${
                tab.id === activeTab
                  ? 'activeTab'
                  : completedTab.includes(tab.id)
                  ? 'done'
                  : ''
              } tab-item tw-relative tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-3 tw-text-center`}
            >
              <div className="icon tw-inline-block tw-flex tw-h-[40px] tw-w-[40px] tw-items-center tw-justify-center tw-rounded-[50%] tw-border-[2px] tw-border-[#7E7D7D]">
                <span dangerouslySetInnerHTML={{ __html: tab.icon }} />
              </div>
              <div className="title tw-font-DM tw-text-lightgray tw-absolute tw-top-[100%] tw-mt-3 tw-whitespace-nowrap tw-text-[12px] tw-leading-[18px]">
                {tab.label}
              </div>
            </div>
            <div className="seperator tw-h-[2px] tw-bg-[#BBBBBB]" />
          </>
        ))}
      </div>
      <div className="tab-content">{Component}</div>
    </div>
  );
}

export default Tab;

Tab.propTypes = {
  tabs: PropTypes.arrayOf
};
