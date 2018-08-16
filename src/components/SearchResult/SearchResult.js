import Taro, { Component } from '@tarojs/taro'
import { View, Icon } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import CheckList from '../CheckList/CheckList';
import { clearSearchResult } from '../../actions/checklist';

import './SearchResult.css'

@connect(({ checklistReducer }) => ({
  searchResult: checklistReducer.searchResult
}), (dispatch) => ({
  clearSearchResult: () => dispatch(clearSearchResult())
}))
class SearchBar extends Component {
  onExitSearch() {
      this.props.clearSearchResult();
  }

  render () {
    return (
      <View className='searchresult'>
        <View className='searchresult-heading'>
            <View className='main-heading'>Search Result</View>
            <Icon size='30' type='clear' onClick={this.onExitSearch.bind(this)} />
        </View>
        <CheckList lists={this.props.searchResult} />
      </View>
    )
  }
}

export default SearchBar