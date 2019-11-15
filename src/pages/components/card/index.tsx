import * as React from 'react';
import { View } from 'remax/alipay';
import Card from 'mini-antui/es/card';

export default class CardPage extends React.Component {
  onCardClick = (ev: any) => {
    my.showToast({
      content: ev.info,
    });
  };

  render() {
    const thumb = 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png';
    const footerImg = 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png';

    return (
      <View className="container">
        <Card title="卡片标题1" subTitle="副标题非必填1" onClick={this.onCardClick} info="点击了第一个card" />
        <View style={{ marginTop: '10px' }} />
        <Card thumb={thumb} title="卡片标题2" subTitle="副标题非必填2" onClick={this.onCardClick} info="点击了第二个card" />
        <View style={{ marginTop: '10px' }} />
        <Card
          thumb={thumb}
          title="卡片标题3"
          subTitle="副标题非必填3"
          onClick={this.onCardClick}
          footer="描述文字"
          footerImg={footerImg}
          info="点击了第三个card"
        />
      </View>
    );
  }
}
