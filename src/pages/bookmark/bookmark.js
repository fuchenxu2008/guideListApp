import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import CheckList from '../../components/CheckList/CheckList';
import { getProcessingChecklists } from '../../actions/usage';

import './bookmark.css'

@connect(({ usageReducer }) => ({
  processing: usageReducer.processing,
  processingChecklists: usageReducer.processingChecklists,
}), (dispatch) => ({
  getProcessingChecklists: (idArr) => dispatch(getProcessingChecklists(idArr))
}))
class Bookmark extends Component {
  config = {
    navigationBarTitleText: 'Processing'
  }

  componentDidMount() {
    this.props.getProcessingChecklists(Object.keys(this.props.processing));
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
    const { processingChecklists } = this.props;
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
