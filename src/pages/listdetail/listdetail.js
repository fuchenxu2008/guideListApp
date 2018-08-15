import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
// import { connect } from '@tarojs/redux'

import './listdetail.css'

// @connect(({  }) => ({
// }), (dispatch) => ({
// }))
class ListDetail extends Component {
  config = {
    navigationBarTitleText: 'Detail'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='listdetail'>
        listdetail
      </View>
    )
  }
}

export default ListDetail;
