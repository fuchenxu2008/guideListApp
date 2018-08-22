import Taro, { Component } from '@tarojs/taro'
import { View, Icon, ScrollView } from '@tarojs/components'
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
  componentWillReceiveProps(nextProps) {
    if (!nextProps.show && this.state.aniClass === 'searchresult-show')
      this.setState({ aniClass: 'searchresult-hidden' })
    else if (nextProps.show) this.setState({ aniClass: 'searchresult-show' });
  }

  onExitSearch() {
      this.props.clearSearchResult();
  }

  onReachBottom = () => {
    console.log('bottom search');
    Taro.vibrateShort();
  }

  render () {
    return (
      <ScrollView
        className='searchresult'
        scrollY
        onScrollToLower={this.onReachBottom}
      >
        <View className='searchresult-heading'>
            <View className='main-heading'>Search Result</View>
            <Icon size='30' type='clear' onClick={this.onExitSearch.bind(this)} />
        </View>
        <CheckList lists={this.props.searchResult} />
      </ScrollView>
    )
  }
}

export default SearchBar