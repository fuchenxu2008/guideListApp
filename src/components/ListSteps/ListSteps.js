import Taro, { Component } from '@tarojs/taro'
import { View, Checkbox, CheckboxGroup } from '@tarojs/components';
import Step from './Step'
import './ListSteps.css'

class ListSteps extends Component {
  render () {
    const { steps, bookmarked, checkedSteps, onCheckStep } = this.props;
    return (
      <View>
        <View className='main-heading'>Steps</View>
        <CheckboxGroup onChange={onCheckStep.bind(this)}>
          {steps.map((step, i) => {
            return (
              <View key={i} className='listdetail-step'>
                {
                  bookmarked ? ( 
                      <Checkbox
                        className='listdetail-checkbox'
                        value={i + 1}
                        checked={checkedSteps.includes((i + 1).toString())}
                      >
                        <Step step={step} />
                      </Checkbox>
                  ) : (
                      <Step step={step} />
                  )
                } 
              </View>
            )
          })}
        </CheckboxGroup>
      </View>
    )
  }
}

ListSteps.defaultProps = {
  steps: [],
};

export default ListSteps