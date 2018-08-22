import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components';
import WxParse from '../wxParse/wxParse';

import './ListSteps.css'

export default class Step extends Component {
  componentDidMount() {
    const { step } = this.props;
    WxParse.wxParse('step', 'html', step, this.$scope);
  }

  render () {
    return (
      <View>
        <import src='../wxParse/wxParse.wxml' />
        <template is='wxParse' data='{{wxParseData:step.nodes}}' />
      </View>
    )
  }
}