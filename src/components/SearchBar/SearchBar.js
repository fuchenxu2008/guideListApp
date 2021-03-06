import Taro, { Component } from '@tarojs/taro'
import { View, Input, Icon } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { searchChecklist, clearSearchResult, updateSearchPhrase } from '../../actions/checklist';

import './SearchBar.css'

@connect(({ checklistReducer }) => ({
  searchPhrase: checklistReducer.searchPhrase,
}), (dispatch) => ({
  searchChecklist: (title) => dispatch(searchChecklist(title)),
  clearSearchResult: () => dispatch(clearSearchResult()),
  updateSearchPhrase: (phrase) => dispatch(updateSearchPhrase(phrase)),
}))
class SearchBar extends Component {
  onSearch(e) {
    const phrase = e.detail.value || e.target.value;
    if (phrase.trim() === '') this.props.clearSearchResult();
    else {
      this.props.updateSearchPhrase(phrase);
      this.props.searchChecklist(phrase);
    }
  }

  render () {
    return (
      <View className='searchbar'>
        <View className='searchbar-inner-wrapper'>   
            <Input
              className='searchbar-input'
              placeholder='Search for a topic here...'
              onInput={this.onSearch.bind(this)}
              onConfirm={this.onSearch.bind(this)}
              value={this.props.searchPhrase}
            />
            <Icon size='15' type='search' className='searchbar-icon' /> 
        </View>
      </View>
    )
  }
}

export default SearchBar