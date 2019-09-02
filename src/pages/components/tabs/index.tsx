import * as React from 'react';
import { View } from 'remax/alipay';
import Tabs from 'remax-antui/lib/tabs';

const { TabContent } = Tabs;

export default class TabsPage extends React.Component {
  state = {
    tabs: [
      {
        title: '选项',
        badgeType: 'text',
        badgeText: '6',
      },
      {
        title: '选项二',
        badgeType: 'dot',
      },
      { title: '3 Tab' },
      { title: '4 Tab' },
      { title: '5 Tab' },
    ],
    activeTab: 2,
  };

  handleTabClick = ({ index }: { index: number }) => {
    this.setState({
      activeTab: index,
    });
  };

  handleTabChange = ({ index }: { index: number }) => {
    this.setState({
      activeTab: index,
    });
  };

  handlePlusClick = () => {
    my.alert({
      content: 'plus clicked',
    });
  };

  render() {
    const { tabs, activeTab } = this.state;

    return (
      <View>
        <Tabs
          tabs={tabs}
          showPlus
          onTabClick={this.handleTabClick}
          onChange={this.handleTabChange}
          onPlusClick={this.handlePlusClick}
          activeTab={activeTab}
          swipeable
        >
          {tabs.map((tab, index) => (
            <TabContent key={index} tabKey={index.toString()}>
              <View className="tab-content">content of {tab.title}</View>
            </TabContent>
          ))}
        </Tabs>
      </View>
    );
  }
}
