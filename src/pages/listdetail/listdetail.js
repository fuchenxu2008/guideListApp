import Taro, { Component } from '@tarojs/taro'
import { View, Image, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import ListSteps from '../../components/ListSteps/ListSteps';
import { getChecklist, clearCurrent } from '../../actions/checklist';
import { addTask, removeTask, updateProgress, finishTask, restartTask } from '../../actions/usage';

import './listdetail.css'

@connect(({ checklistReducer, usageReducer }) => ({
  currentChecklist: checklistReducer.currentChecklist,
  processing: usageReducer.processing,
  finished: usageReducer.finished,
}), (dispatch) => ({
  getChecklist: (id) => dispatch(getChecklist(id)),
  clearCurrent: () => dispatch(clearCurrent()),
  addTask: (id) => dispatch(addTask(id)),
  removeTask: (id) => dispatch(removeTask(id)),
  updateProgress: (id, steps) => dispatch(updateProgress(id, steps)),
  finishTask: (id) => dispatch(finishTask(id)),
  restartTask: (id) => dispatch(restartTask(id)),
}))
class ListDetail extends Component {
  config = {
    navigationBarTitleText: 'Detail',
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
    if (this.props.currentChecklist.steps.length === e.detail.value.length)
      this.props.finishTask(id);
  }

  onAddTask(id) {
    this.props.addTask(id);
    Taro.vibrateShort();
  }

  onRemoveTask(id) {
    this.props.removeTask(id);
    Taro.vibrateShort();
  }

  onRestartTask(id) {
    this.props.restartTask(id);
    Taro.vibrateShort();
  }

  render () {
    const list = this.props.currentChecklist;
    const { processing, finished } = this.props;
    const isProcessing = list && processing.hasOwnProperty(list.id);
    const isFinished = list && finished.includes(list.id);

    return list ? (
      <View className='listdetail'>
        { isFinished && <View className='listdetail-finished'>Finished</View> }
        <View className='listdetail-brand'>
          <Image src={list.image} alt='' className='listdetail-brand-image' mode='aspectFill' />
        </View>
        <View className='listdetail-body'>
          <View className='listdetail-title'>{list.title}</View>
          { list.note && <View className='listdetail-note'>{list.note}</View> }
          <ListSteps
            steps={list.steps || []}
            processing={isProcessing}
            onCheckStep={this.handleCheckStep.bind(this, list.id)}
            checkedSteps={processing[list.id.toString()] || []}
          />
          {
            isProcessing
            ? <Button className='listdetail-removebookmark' onClick={this.onRemoveTask.bind(this, list.id)}>Remove Task</Button>
            : (
              isFinished
                ? <Button className='listdetail-addbookmark' onClick={this.onRestartTask.bind(this, list.id)}>Restart Task</Button>
                : <Button className='listdetail-addbookmark' onClick={this.onAddTask.bind(this, list.id)}>Start Task</Button>
            )
          }
        </View>
      </View>
    ) : (
      <View className='loading'>Loading...</View>
    )
  }
}

export default ListDetail;
