import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import './CheckListItem.css'

@connect(({ usageReducer }) => ({
  processing: usageReducer.processing,
  finished: usageReducer.finished,
}))
class CheckListItem extends Component {
  enterCheckListItem(id) {
      Taro.vibrateShort();
      Taro.navigateTo({
          url: `/pages/listdetail/listdetail?id=${id}`
      })
  }

  render () {  
    const { list, processing, finished } = this.props;
    const status = list && (finished.includes(list.id))
      ? 'Finished'
      : (
        list && processing.hasOwnProperty(list.id) ? 'Processing' : 'unplayed'
      );
    return (
      <View
        className='checklistitem'
        onClick={this.enterCheckListItem.bind(this, list.id)}
      >
        {
          status !== 'unplayed' &&
          <View className={`${status === 'Finished' && 'checklistitem-finished'} ${status === 'Processing' && 'checklistitem-processing'}`}>
            {status}
          </View>
        }
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