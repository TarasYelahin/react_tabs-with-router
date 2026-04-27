import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useParams, useNavigate } from 'react-router-dom';
export const TabsPage = () => {
  const tabs = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];
  const { tabId } = useParams();
  const navigate = useNavigate();
  const activeTabIndex = tabs.findIndex(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs
        selectedIndex={activeTabIndex >= 0 ? activeTabIndex : 0}
        onSelect={index => navigate(`/tabs/${tabs[index].id}`)}
      >
        <TabList>
          {tabs.map(tab => (
            <Tab key={tab.id} data-cy="Tab">
              {tab.title}
            </Tab>
          ))}
        </TabList>
        {tabs.map(tab => (
          <TabPanel key={tab.id}>{tab.content}</TabPanel>
        ))}
      </Tabs>
    </>
  );
};
