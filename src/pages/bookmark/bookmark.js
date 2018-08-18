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
        <View className='main-heading'>Your Bookmarks</View>
        {
          bookmarkedChecklists.length > 0
            ? <CheckList lists={bookmarkedChecklists} />
            : <View className='no-bookmark'>
                ～ No Bookmark ～
              </View>
        }
      </View>
    )
  }
}

export default Bookmark;
