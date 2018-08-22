import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchResult from '../../components/SearchResult/SearchResult';
import CheckList from '../../components/CheckList/CheckList';
import Carousel from '../../components/Carousel/Carousel';
import { getAllChecklists } from '../../actions/checklist';

import './index.css'

@connect(({ checklistReducer, usageReducer }) => ({
  checklists: checklistReducer.checklists,
  bookmarked: usageReducer.bookmarked,
  searching: checklistReducer.searching,
}),
  (dispatch) => ({
    getAllChecklists: () => dispatch(getAllChecklists()),
  }
))
class Index extends Component {
  config = {
    navigationBarTitleText: 'Explore'
  }

  componentWillMount() {
    this.props.getAllChecklists();    
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
      title: 'Explore Guides',
      desc: 'Explore new tips and guide.',
      path: '/pages/index/index'
    }
  }

  onReachBottom() {
    console.log('bottom');
    Taro.vibrateShort();
  }

  render () {
    return (
      <View className='index' style={{ position: `${this.props.searching ? 'fixed' : 'static'}` }}>
        <SearchBar />
        { this.props.searching && <SearchResult /> }
        <View className='main-heading'>Featured</View>
        <Carousel contents={this.props.checklists} />
        <View className='main-heading'>Explore More</View>
        <CheckList lists={this.props.checklists} />
      </View>
    )
  }
}

export default Index
