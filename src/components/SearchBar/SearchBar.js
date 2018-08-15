import Taro, { Component } from '@tarojs/taro'
import { View, Input, Icon } from '@tarojs/components'
// import { connect } from '@tarojs/redux'

import './SearchBar.css'

// @connect(({  }) => ({
// }), (dispatch) => ({
// }))
class SearchBar extends Component {
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='searchbar'>
        <View className='searchbar-inner-wrapper'>
            <Input className='searchbar-input' placeholder='Search for a topic here...' />
            <Icon size='15' type='search' className='searchbar-icon' />
        </View>
      </View>
    )
  }
}

export default SearchBar