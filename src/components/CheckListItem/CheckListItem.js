import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
// import { connect } from '@tarojs/redux'
import image from '../../assets/img/cal.png';

import './CheckListItem.css'

// @connect(({  }) => ({
// }), (dispatch) => ({
// }))
class CheckListItem extends Component {
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  enterCheckListItem() {
      Taro.navigateTo({
          url: '/pages/listdetail/listdetail'
      })
  }

  render () {
    const { list } = this.props; 
    return (
      <View className='checklistitem' onClick={this.enterCheckListItem.bind(this)}>
        <View className='checklistitem-heading'>
            <Image src={image} alt='' className='checklistitem-image' mode='aspectFit' />
        </View>
        <View className='checklistitem-title'>
            {list.title}
        </View>
      </View>
    )
  }
}

export default CheckListItem