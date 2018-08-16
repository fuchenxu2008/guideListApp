import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
// import { connect } from '@tarojs/redux'
import CheckListItem from '../CheckListItem/CheckListItem';

import './CheckList.css'

// @connect(({  }) => ({
// }), (dispatch) => ({
// }))
class CheckList extends Component {
  render () {
    return (
      <View className='checklist'>
        {this.props.lists.map((list, i) => (
            <CheckListItem key={i} list={list} />
        ))}
      </View>
    )
  }
}

export default CheckList