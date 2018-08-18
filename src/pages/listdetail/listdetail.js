import Taro, { Component } from '@tarojs/taro'
import { View, Image, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import ListSteps from '../../components/ListSteps/ListSteps';
import { getChecklist, clearCurrent } from '../../actions/checklist';
import { addBookmark, removeBookmark, updateProgress } from '../../actions/usage';

import './listdetail.css'

@connect(({ checklistReducer, usageReducer }) => ({
  currentChecklist: checklistReducer.currentChecklist,
  bookmarked: usageReducer.bookmarked,
}), (dispatch) => ({
  getChecklist: (id) => dispatch(getChecklist(id)),
  clearCurrent: () => dispatch(clearCurrent()),
  addBookmark: (id) => dispatch(addBookmark(id)),
  removeBookmark: (id) => dispatch(removeBookmark(id)),
  updateProgress: (id, steps) => dispatch(updateProgress(id, steps)),
}))
class ListDetail extends Component {
  config = {
    navigationBarTitleText: 'Detail'
  }

  componentDidMount () {
    const { id } = this.$router.params;
    if (id) this.props.getChecklist(id);
  }

  componentWillUnmount() {
    this.props.clearCurrent();
  }

  onShareAppMessage() {
    const { currentChecklist } = this.props;
    return {
      title: 'XJTLU Guides',
      desc: currentChecklist.title,
      path: `/pages/listdetail/listdetail?id=${currentChecklist.id}`
    }
  }

  handleCheckStep = (id, e) => {
    Taro.vibrateShort();
    this.props.updateProgress(id, e.detail.value);
  }

  onAddBookmark(id) {
    this.props.addBookmark(id);
    Taro.vibrateShort();
  }

  onRemoveBookmark(id) {
    this.props.removeBookmark(id);
    Taro.vibrateShort();
  }

  render () {
    const list = this.props.currentChecklist;
    const bookmarked = list && this.props.bookmarked.hasOwnProperty(list.id);
    return list ? (
      <View className='listdetail'>
        <View className='listdetail-brand'>
          <Image src={list.image} alt='' className='listdetail-brand-image' mode='aspectFill' />
        </View>
        <View className='listdetail-body'>
          <View className='listdetail-title'>{list.title}</View>
          { list.note && <View className='listdetail-note'>{list.note}</View> }
          <ListSteps
            steps={list.steps || []}
            bookmarked={bookmarked}
            onCheckStep={this.handleCheckStep.bind(this, list.id)}
            checkedSteps={this.props.bookmarked[list.id.toString()] || []}
          />
          {
            bookmarked
            ? <Button className='listdetail-removebookmark' onClick={this.onRemoveBookmark.bind(this, list.id)}>Remove Bookmark</Button>
            : <Button className='listdetail-addbookmark' onClick={this.onAddBookmark.bind(this, list.id)}>Add Bookmark</Button>
          }
        </View>
      </View>
    ) : (
      <View className='loading'>Loading...</View>
    )
  }
}

export default ListDetail;
