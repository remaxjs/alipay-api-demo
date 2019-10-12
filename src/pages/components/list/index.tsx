import * as React from 'react';
import { View, ScrollView } from 'remax/alipay';
import List from 'mini-antui/es/list';
import ListItem from 'mini-antui/es/list/list-item';
import './index.css';

const newitems = [
  {
    thumb: 'https://gw.alipayobjects.com/zos/rmsportal/KXDIRejMrRdKlSEcLseB.png',
    title: '固定到头部',
    arrow: true,
    sticky: true,
  },
  {
    title: '标题文字不换行很长很长很长很长很长很长很长很长很长很长',
    arrow: true,
  },
  {
    title: '标题文字换行很长很长很长很长很长很长很长很长很长很长',
    arrow: true,
    textMode: 'wrap',
  },
  {
    title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
    extra: '没有箭头',
    textMode: 'wrap',
  },
  {
    title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
    extra: '子元素垂直对齐',
    textMode: 'wrap',
    align: 'top',
  },
  {
    title: '标题文字换行很长很长很长很长很长很长很长很长很长很长',
    arrow: true,
    textMode: 'wrap',
  },
  {
    title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
    extra: '没有箭头',
    textMode: 'wrap',
  },
  {
    title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
    extra: '子元素垂直对齐',
    textMode: 'wrap',
    align: 'top',
  },
  {
    title: '标题文字换行很长很长很长很长很长很长很长很长很长很长',
    arrow: true,
    textMode: 'wrap',
  },
  {
    title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
    extra: '没有箭头',
    textMode: 'wrap',
  },
  {
    title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
    extra: '子元素垂直对齐',
    textMode: 'wrap',
    align: 'top',
  },
  {
    title: '标题文字换行很长很长很长很长很长很长很长很长很长很长',
    arrow: true,
    textMode: 'wrap',
  },
  {
    title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
    extra: '没有箭头',
    textMode: 'wrap',
  },
  {
    title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
    extra: '子元素垂直对齐',
    textMode: 'wrap',
    align: 'top',
  },
];

export default class ListPage extends React.Component {
  state = {
    items: [
      {
        title: '单行列表',
        extra: '详细信息',
      },
    ],
    items2: [
      {
        title: '多行列表',
        arrow: true,
      },
      {
        title: '多行列表',
        arrow: 'up',
      },
      {
        title: '多行列表',
        arrow: 'down',
      },
      {
        title: '多行列表',
        arrow: 'empty',
      },
      {
        title: '多行列表',
      },
    ],
    items3: [
      {
        title: '双行列表',
        brief: '描述信息',
        arrow: true,
      },
    ],
    items4: [
      {
        title: '双行列表',
        brief: '描述信息',
        arrow: true,
      },
      {
        title: '双行列表',
        brief: '描述信息',
        arrow: true,
      },
      {
        title: '双行列表',
        brief: '描述信息',
        arrow: true,
      },
    ],
    itemsThumb: [
      {
        thumb: 'https://tfsimg.alipay.com/images/partner/T12rhxXkxcXXXXXXXX',
        title: '标题文字',
        extra: '描述文字',
        arrow: true,
      },
      {
        thumb: 'https://tfsimg.alipay.com/images/partner/T12rhxXkxcXXXXXXXX',
        title: '标题文字',
        arrow: true,
      },
      {
        thumb: 'https://tfsimg.alipay.com/images/partner/T12rhxXkxcXXXXXXXX',
        title: '标题文字',
        arrow: true,
      },
    ],
    itemsThumbMultiple: [
      {
        thumb: 'https://tfsimg.alipay.com/images/partner/T12rhxXkxcXXXXXXXX',
        title: '标题文字',
        brief: '描述信息',
      },
      {
        thumb: 'https://tfsimg.alipay.com/images/partner/T12rhxXkxcXXXXXXXX',
        title: '标题文字',
      },
      {
        thumb: 'https://tfsimg.alipay.com/images/partner/T12rhxXkxcXXXXXXXX',
        title: '标题文字',
      },
    ],
    items5: [
      {
        thumb: 'https://gw.alipayobjects.com/zos/rmsportal/KXDIRejMrRdKlSEcLseB.png',
        title: '固定到头部',
        brief: '描述信息',
        arrow: true,
        sticky: true,
      },
      {
        title: '标题文字不换行很长很长很长很长很长很长很长很长很长很长',
        arrow: true,
        align: 'middle',
      },
      {
        title: '标题文字换行很长很长很长很长很长很长很长很长很长很长',
        arrow: true,
        align: 'top',
      },
      {
        title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
        extra: '没有箭头',
        align: 'bottom',
      },
      {
        title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
        extra: '子元素垂直对齐',
        align: 'top',
      },
      {
        title: '标题文字换行很长很长很长很长很长很长很长很长很长很长',
        arrow: true,
      },
      {
        title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
        extra: '没有箭头',
      },
      {
        title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
        extra: '子元素垂直对齐',
        align: 'top',
      },
      {
        title: '标题文字换行很长很长很长很长很长很长很长很长很长很长',
        arrow: true,
      },
      {
        title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
        extra: '没有箭头',
      },
      {
        title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
        extra: '子元素垂直对齐',
        align: 'top',
      },
      {
        title: '标题文字换行很长很长很长很长很长很长很长很长很长很长',
        arrow: true,
      },
      {
        title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
        extra: '没有箭头',
      },
      {
        title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
        extra: '子元素垂直对齐',
        align: 'middle',
      },
    ],
  };

  onItemClick = (ev: any) => {
    my.alert({
      content: `点击了第${ev.index}行`,
    });
  };

  onScrollToLower = () => {
    const { items5 } = this.state;
    const newItems = items5.concat(newitems as any);
    console.log(newItems.length);
    this.setState({
      items5: newItems,
    });
  };

  render() {
    const { items, items2, items3, items4, items5, itemsThumb, itemsThumbMultiple } = this.state;
    return (
      <View>
        <ScrollView style={{ height: '100vh' }} scrollY onScrollToLower={this.onScrollToLower}>
          <List>
            <View slot="header">列表头部</View>
            {items.map((item, index) => (
              <ListItem index={index} onClick={this.onItemClick} key={index} last={index === items.length - 1}>
                <View slot="extra">{item.extra}</View>
                <View>{item.title}</View>
              </ListItem>
            ))}
            <View slot="footer">列表尾部</View>
          </List>
          <List>
            <View slot="header">列表头部</View>
            {items2.map((item, index) => (
              <ListItem
                arrow={item.arrow}
                onClick={this.onItemClick}
                index={index}
                key={index}
                last={index === items2.length - 1}
              >
                {item.title}
              </ListItem>
            ))}
            <View slot="footer">列表尾部</View>
          </List>
          <List>
            <View slot="header">列表头部</View>
            {items3.map((item, index) => (
              <ListItem
                arrow={item.arrow}
                index={index}
                onClick={this.onItemClick}
                key={index}
                last={index === items3.length - 1}
                multipleLine
              >
                {item.title}
              </ListItem>
            ))}
            <View slot="footer">列表尾部</View>
          </List>
          <List>
            <View slot="header">列表头部</View>
            {items4.map((item, index) => (
              <ListItem
                arrow={item.arrow}
                onClick={this.onItemClick}
                index={index}
                last={index === items4.length - 1}
                key={index}
                multipleLine
              >
                {item.title}
              </ListItem>
            ))}
            <View slot="footer">列表尾部</View>
          </List>
          <List>
            <View slot="header">小图文列表</View>
            {itemsThumb.map((item, index) => (
              <ListItem
                thumb={item.thumb}
                arrow={item.arrow}
                onClick={this.onItemClick}
                index={index}
                last={index === itemsThumb.length - 1}
                key={index}
              >
                <View slot="extra">{item.extra}</View>
                <View>{item.title}</View>
              </ListItem>
            ))}
          </List>
          <List>
            <View slot="header">小图文双行列表</View>
            {itemsThumbMultiple.map((item, index) => (
              <ListItem
                thumb={item.thumb}
                onClick={this.onItemClick}
                index="index"
                last={index === itemsThumbMultiple.length - 1}
                key={index}
                multipleLine
              >
                {item.title}
              </ListItem>
            ))}
          </List>
          <List>
            <View slot="header">无限滚动列表</View>
            {items5.map((item, index) => (
              <ListItem
                className={item.sticky ? 'am-list-sticky' : ''}
                thumb={item.thumb}
                arrow={item.arrow}
                align={item.align}
                last={index === items5.length - 1}
                index={index}
                key={index}
                onClick={this.onItemClick}
                disabled={item.sticky}
                wrap
              >
                <View slot="extra">{item.extra}</View>
                <View>
                  {item.title}
                  {index}
                </View>
              </ListItem>
            ))}
            <View slot="footer">列表尾部</View>
          </List>
        </ScrollView>
      </View>
    );
  }
}
