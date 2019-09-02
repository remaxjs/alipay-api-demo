import * as React from 'react';
import { View, Button, Image } from 'remax/alipay';
import Modal from 'remax-antui/lib/modal';
import './index.css';

export default class ModalPage extends React.Component {
  state = {
    modalOpened: false,
    modalOpened2: false,
    modalOpened21: false,
    modalOpened22: false,
    modalOpened3: false,
    modalOpened4: false,
  };

  openModal = () => {
    this.setState({
      modalOpened: true,
    });
  };

  onModalClick = () => {
    this.setState({
      modalOpened: false,
    });
  };

  onModalClose = () => {
    this.setState({
      modalOpened: false,
    });
  };

  openModal2 = () => {
    this.setState({
      modalOpened2: true,
    });
  };

  onModalClick2 = () => {
    this.setState({
      modalOpened2: false,
    });
  };

  onModalClose2 = () => {
    this.setState({
      modalOpened2: false,
    });
  };

  openModal21 = () => {
    this.setState({
      modalOpened21: true,
    });
  };

  onModalClick21 = () => {
    this.setState({
      modalOpened21: false,
    });
  };

  onModalClose21 = () => {
    this.setState({
      modalOpened21: false,
    });
  };

  openModal22 = () => {
    this.setState({
      modalOpened22: true,
    });
  };

  onModalClick22 = () => {
    this.setState({
      modalOpened22: false,
    });
  };

  onModalClose22 = () => {
    this.setState({
      modalOpened22: false,
    });
  };

  openModal3 = () => {
    this.setState({
      modalOpened3: true,
    });
  };

  onModalClick3 = () => {
    this.setState({
      modalOpened3: false,
    });
  };

  openModal4 = () => {
    this.setState({
      modalOpened4: true,
    });
  };

  onModalClick4 = () => {
    this.setState({
      modalOpened4: false,
    });
  };

  render() {
    const { modalOpened, modalOpened2, modalOpened21, modalOpened22, modalOpened3, modalOpened4 } = this.state;

    return (
      <View>
        <View style={{ marginTop: '10px' }} />
        <Button onTap={this.openModal21} style={{ margin: '0 10px' }}>
          带图弹窗
        </Button>
        <View style={{ marginTop: '10px' }} />
        <Button onTap={this.openModal22} style={{ margin: '0 10px' }}>
          带图弹窗-小图
        </Button>
        <View style={{ marginTop: '10px' }} />
        <Button onTap={this.openModal2} style={{ margin: '0 10px' }}>
          带图弹窗-大图
        </Button>
        <View style={{ marginTop: '10px' }} />
        <Button onTap={this.openModal} style={{ margin: '0 10px' }}>
          通用modal
        </Button>
        <View style={{ marginTop: '10px' }} />
        <Button onTap={this.openModal3} style={{ margin: '0 10px' }}>
          运营活动弹窗-大
        </Button>
        <View style={{ marginTop: '10px' }} />
        <Button onTap={this.openModal4} style={{ margin: '0 10px' }}>
          运营活动弹窗-小
        </Button>
        <Modal
          show={modalOpened21}
          onModalClick={this.onModalClick21}
          onModalClose={this.onModalClose21}
          topImage="https://gw.alipayobjects.com/zos/rmsportal/yFeFExbGpDxvDYnKHcrs.png"
          header={<View>标题单行</View>}
          footer={<View>确定</View>}
        >
          说明当前状态、提示用户解决方案，最好不要超过两行。
        </Modal>
        <Modal
          show={modalOpened2}
          onModalClick={this.onModalClick2}
          onModalClose={this.onModalClose2}
          topImage="https://gw.alipayobjects.com/zos/rmsportal/yFeFExbGpDxvDYnKHcrs.png"
          topImageSize="lg"
          closeType="1"
          header={<View>标题单行</View>}
          footer={<View>确定</View>}
        >
          说明当前状态、提示用户解决方案，最好不要超过两行。
        </Modal>
        <Modal
          show={modalOpened22}
          onModalClick={this.onModalClick22}
          onModalClose={this.onModalClose22}
          topImage="https://gw.alipayobjects.com/zos/rmsportal/yFeFExbGpDxvDYnKHcrs.png"
          topImageSize="sm"
          header={<View>标题单行</View>}
          footer={<View>确定</View>}
        >
          说明当前状态、提示用户解决方案，最好不要超过两行。
        </Modal>
        <Modal
          show={modalOpened}
          onModalClick={this.onModalClick}
          onModalClose={this.onModalClose}
          footer={<View>确定</View>}
        >
          <View style={{ margin: '20px 0 10px 0;' }}>让员工用支付宝扫一扫，添加为店员</View>
          <Image
            mode="widthFix"
            style={{ width: '100%' }}
            src="https://tfsimg.alipay.com/images/mobilecodec/TB1JjWmXkyEDuNjme6tXXXIKXXa"
          />
          二维码每分钟自动更新
        </Modal>
        <Modal show={modalOpened3} onModalClose={this.onModalClick3} advice>
          <View style={{ display: 'flex', height: '465px', width: '319px' }}>
            <Image
              style={{ height: '465px', width: '319px' }}
              src="https://gw.alipayobjects.com/zos/rmsportal/vJzAWQLgeDLGOMKiIgZt.png"
            />
          </View>
        </Modal>
        <Modal show={modalOpened4} onModalClose={this.onModalClick4} advice>
          <View style={{ display: 'flex', width: '270px', height: '350px' }}>
            <Image
              style={{ width: '270px', height: '350px' }}
              src="https://gw.alipayobjects.com/zos/rmsportal/vJzAWQLgeDLGOMKiIgZt.png"
            />
          </View>
        </Modal>
      </View>
    );
  }
}
