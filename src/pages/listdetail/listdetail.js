import Taro, { Component } from '@tarojs/taro'
import { View, Image, Checkbox, CheckboxGroup, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { getChecklist, clearCurrent } from '../../actions/checklist';

import './listdetail.css'

@connect(({ checklistReducer }) => ({
  currentChecklist: checklistReducer.currentChecklist
}), (dispatch) => ({
  getChecklist: (id) => dispatch(getChecklist(id)),
  clearCurrent: () => dispatch(clearCurrent())
}))
class ListDetail extends Component {
  config = {
    navigationBarTitleText: 'Detail'
  }

  componentDidMount () {
    const { id } = this.$router.params;
    console.log('id: ', id);
    if (id) this.props.getChecklist(id);
  }

  componentWillUnmount() {
    this.props.clearCurrent();
  }

  onCheckStep(e) {
    console.log(e);
  }

  render () {
    const list = this.props.currentChecklist;
    return (
      <View className='listdetail'>
        <View className='listdetail-brand'>
          <Image src={list.image} alt='' className='listdetail-brand-image' mode='aspectFill' />
        </View>
        <View className='listdetail-body'>
          <View className='listdetail-title'>{list.title}</View>
          {
            list.note && <View className='listdetail-note'>{list.note}</View>
          }
          <View>
            <View className='main-heading'>{list ? 'Steps' : ''}</View>
            {list.steps.map((step, i) => (
              <View key={i} className='listdetail-step'>
                <CheckboxGroup onChange={this.onCheckStep.bind(this)}>
                  <Checkbox className='listdetail-checkbox'>{i + 1}. {step}</Checkbox>
                </CheckboxGroup>
              </View>
            ))}
          </View>
          <Button className='listdetail-addbookmark'>Add Bookmark</Button>
        </View>
      </View>
    )
  }
}

export default ListDetail;
