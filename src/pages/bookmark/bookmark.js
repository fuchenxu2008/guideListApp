import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import CheckList from '../../components/CheckList/CheckList';

import './bookmark.css'

@connect(({ usageReducer, checklistReducer }) => ({
  processing: usageReducer.processing,
  checklists: checklistReducer.checklists,
}))
class Bookmark extends Component {
  config = {
    navigationBarTitleText: 'Processing'
  }

  componentDidShow() {
    if (Object.keys(this.props.processing).length > 0) {
      Taro.setTabBarBadge({
        index: 1,
        text: Object.keys(this.props.processing).length.toString()
      })
    } else {
      Taro.removeTabBarBadge({ index: 1 })
    }
  }

  onShareAppMessage() {
    return {
      title: 'Your Processing Tasks',
      desc: 'Keep track of your progress.',
      path: '/pages/bookmark/bookmark'
    }
  }

  render () {
    const { processing, checklists } = this.props;
    const processingChecklists = checklists.filter(list => Object.keys(processing).includes(list.id.toString()));
    return (
      <View className='bookmark'>
        <View className='main-heading'>Your Tasks</View>
        {
          processingChecklists.length > 0
            ? <CheckList lists={processingChecklists} />
            : <View className='no-bookmark'>
                ～ No Tasks ～
              </View>
        }
      </View>
    )
  }
}

export default Bookmark;
