import Taro, { Component } from '@tarojs/taro'
import { View, Input, Icon } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { searchChecklist, clearSearchResult } from '../../actions/checklist';

import './SearchBar.css'

@connect(({}) => ({}), (dispatch) => ({
  searchChecklist: (title) => dispatch(searchChecklist(title)),
  clearSearchResult: () => dispatch(clearSearchResult())
}))
class SearchBar extends Component {
  onSearch(e) {
    this.props.searchChecklist(e.detail.value);
  }

  onCheckEmpty(e) {
    if (e.detail.value === '') this.props.clearSearchResult();
  }

  render () {
    return (
      <View className='searchbar'>
        <View className='searchbar-inner-wrapper'>   
            <Input
              className='searchbar-input'
              placeholder='Search for a topic here...'
              onInput={this.onCheckEmpty.bind(this)}
              onConfirm={this.onSearch.bind(this)}
            />
            <Icon size='15' type='search' className='searchbar-icon' /> 
        </View>
      </View>
    )
  }
}

export default SearchBar