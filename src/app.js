import Taro, { Component } from '@tarojs/taro'
import '@tarojs/async-await'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.css'

const store = configStore()

class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/bookmark/bookmark',
      'pages/listdetail/listdetail'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      selectedColor: '#FACB61',
      list: [{
        pagePath: "pages/index/index",
        text: "Explore",
        iconPath: 'assets/icons/icon-check-list.png',
        selectedIconPath: 'assets/icons/icon-check-list-selected.png',
      },{
        pagePath: "pages/bookmark/bookmark",
        text: "Processing",
        iconPath: 'assets/icons/bookmark.png',
        selectedIconPath: 'assets/icons/bookmark-selected.png',
      }]
    },
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
