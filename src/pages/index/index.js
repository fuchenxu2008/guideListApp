import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import SearchBar from '../../components/SearchBar/SearchBar';
import CheckList from '../../components/CheckList/CheckList';
import Carousel from '../../components/Carousel/Carousel';
import database from '../../database';

// import { connect } from '@tarojs/redux'

import './index.css'

// @connect(({  }) => ({
// }), (dispatch) => ({
// }))
class Index extends Component {
  config = {
    navigationBarTitleText: 'Explore'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <SearchBar />
        <View className='main-heading'>Featured</View>
        <Carousel />
        <View className='main-heading'>Explore More</View>
        <CheckList lists={database} />
      </View>
    )
  }
}

export default Index
