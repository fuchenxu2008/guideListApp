import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import CheckList from '../../components/CheckList/CheckList';

import './bookmark.css'

@connect(({ usageReducer, checklistReducer }) => ({
  bookmarked: usageReducer.bookmarked,
  checklists: checklistReducer.checklists,
}))
class Bookmark extends Component {
  config = {
    navigationBarTitleText: 'Bookmark'
  }

  componentDidShow() {
    if (Object.keys(this.props.bookmarked).length > 0) {
      Taro.setTabBarBadge({
        index: 1,
        text: Object.keys(this.props.bookmarked).length.toString()
      })
    } else {
      Taro.removeTabBarBadge({ index: 1 })
    }
  }

  onShareAppMessage() {
    return {
      title: 'Your Bookmarks',
      desc: 'Keep track of your progress.',
      path: '/pages/bookmark/bookmark'
    }
  }

  render () {
    const { bookmarked, checklists } = this.props;
    const bookmarkedChecklists = checklists.filter(list => Object.keys(bookmarked).includes(list.id.toString()));
    return (
      <View className='bookmark'>
        <View className='main-heading'>Your Processing Task</View>
        {
          bookmarkedChecklists.length > 0
            ? <CheckList lists={bookmarkedChecklists} />
            : <View className='no-bookmark'>
                ～ No Processing Tasks ～
              </View>
        }
      </View>
    )
  }
}

export default Bookmark;
