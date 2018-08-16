import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
// import { connect } from '@tarojs/redux'

import './CheckListItem.css'

// @connect(({  }) => ({
// }), (dispatch) => ({
// }))
class CheckListItem extends Component {
  enterCheckListItem(id) {
      Taro.navigateTo({
          url: `/pages/listdetail/listdetail?id=${id}`
      })
  }

  render () {
    const { list } = this.props; 
    return (
      <View className='checklistitem' onClick={this.enterCheckListItem.bind(this, list.id)}>
        <View className='checklistitem-heading'>
            <Image src={list.image} alt='' className='checklistitem-image' mode='aspectFill' />
        </View>
        <View className='checklistitem-title'>
            {list.title}
        </View>
      </View>
    )
  }
}

export default CheckListItem