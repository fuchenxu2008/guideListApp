import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchResult from '../../components/SearchResult/SearchResult';
import CheckList from '../../components/CheckList/CheckList';
import Carousel from '../../components/Carousel/Carousel';
import { getAllChecklists } from '../../actions/checklist';

import './index.css'

@connect(({ checklistReducer }) => ({
  checklists: checklistReducer.checklists,
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

  render () {
    return (
      <View className='index' style={{ position: `${this.props.searching ? 'fixed' : 'static'}` }}>
        <SearchBar />
        <SearchResult show={this.props.searching} />
        <View className='main-heading'>Featured</View>
        <Carousel />
        <View className='main-heading'>Explore More</View>
        <CheckList lists={this.props.checklists} />
      </View>
    )
  }
}

export default Index
