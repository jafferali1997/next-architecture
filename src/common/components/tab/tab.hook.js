import { useState } from 'react';

export default function TabHook({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);
  const [completedTab, setCompletedTab] = useState([]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleTabCompleted = (tabId) => {
    setCompletedTab([...new Set([...completedTab, tabId])]);
  };

  const resetTabCompleted = () => {
    setCompletedTab([]);
  };

  let Component = tabs.find((tab) => tab.id === activeTab)?.content;
  Component = {
    ...Component,
    props: { handleTabClick, handleTabCompleted, resetTabCompleted }
  };
  return {
    tabs,
    activeTab,
    setActiveTab,
    completedTab,
    setCompletedTab,
    handleTabClick,
    resetTabCompleted,
    Component
  };
}
