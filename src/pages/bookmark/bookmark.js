import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
// import { connect } from '@tarojs/redux'

import './bookmark.css'

// @connect(({  }) => ({
// }), (dispatch) => ({
// }))
class Bookmark extends Component {
  config = {
    navigationBarTitleText: 'Bookmark'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='bookmark'>
        bookmark
      </View>
    )
  }
}

export default Bookmark;
