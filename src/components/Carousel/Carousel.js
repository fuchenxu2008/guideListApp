import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'

import './Carousel.css'

class Carousel extends Component {
  enterCheckListItem(id) {
    Taro.navigateTo({
      url: `/pages/listdetail/listdetail?id=${id}`
    })
  }

  render () {
    const picked = [];
    const availableList = this.props.contents || [];
    while (picked.length < 3) {
      const pickedIndex = Math.floor(Math.random() * availableList.length)
      picked.push(availableList[pickedIndex]);
      availableList.splice(pickedIndex, 1);
    }

    return (
      <Swiper
        indicatorDots
        autoplay
        circular
        interval='5000'
        duration='500'
        className='carousel'
      >
        {
          picked.map(list => (
            <SwiperItem key={list.id} className='carousel-item'>
              <View onClick={this.enterCheckListItem.bind(this, list.id)}>
                <Image src={list.image} alt='' className='swiper-img' mode='aspectFill' />
                <View className='carousel-title'>{list.title}</View>
              </View>
            </SwiperItem>
          ))
        }
      </Swiper>
    )
  }
}

export default Carousel