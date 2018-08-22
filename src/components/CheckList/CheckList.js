import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import CheckListItem from '../CheckListItem/CheckListItem';

import './CheckList.css'

class CheckList extends Component {
  render () {
    const jsx = this.props.lists ? (
      <View className='checklist'>
        {this.props.lists.map((list, i) => (
            <CheckListItem key={i} list={list} />
        ))}
      </View>
    ) : (
      <View className='loading'>Loading...</View>
    )
    return (
      <View>{jsx}</View>
    )
  }
}

export default CheckList