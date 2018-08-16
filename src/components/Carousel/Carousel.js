import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
// import { connect } from '@tarojs/redux'
import image from '../../assets/img/passport.jpeg';

import './Carousel.css'

// @connect(({  }) => ({
// }), (dispatch) => ({
// }))
class Carousel extends Component {
  onClickSwiperItem() {
    Taro.navigateTo({
      url: '/pages/listdetail/listdetail'
    })
  }

  render () {
    const swiper = (
      <SwiperItem className='carousel-item'>
          <View onClick={this.onClickSwiperItem.bind(this)}>
            <Image src={image} alt='' className='swiper-img' mode='aspectFill' />
          </View>
        </SwiperItem>
    );

    return (
      <Swiper
        indicatorDots
        autoplay
        circular
        interval='5000'
        duration='500'
        className='carousel'
      >
        {swiper}
        {swiper}
      </Swiper>
    )
  }
}

export default Carousel