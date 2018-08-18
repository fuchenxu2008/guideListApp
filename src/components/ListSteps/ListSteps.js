import Taro, { Component } from '@tarojs/taro'
import { View, Checkbox, CheckboxGroup } from '@tarojs/components'

import './ListSteps.css'

class ListSteps extends Component {
  render () {
    const { steps, bookmarked, checkedSteps, onCheckStep } = this.props; 
    
    return (
      <View>
        <View className='main-heading'>Steps</View>
        <CheckboxGroup onChange={onCheckStep.bind(this)}>
          {steps.map((step, i) => (
            <View key={i} className='listdetail-step'>
              {
                bookmarked ? ( 
                    <Checkbox
                      className='listdetail-checkbox'
                      value={i + 1}
                      checked={checkedSteps.includes((i + 1).toString())}
                    >{i + 1}. {step}
                    </Checkbox>
                ) : (
                  <View>{i + 1}. {step}</View>
                )
              } 
            </View>
          ))}
        </CheckboxGroup>
      </View>
    )
  }
}

ListSteps.defaultProps = {
  steps: [],
};

export default ListSteps