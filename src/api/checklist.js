import Taro from '@tarojs/taro';

const ROOT_URL = 'https://guide.kyrie.top';
// const ROOT_URL = 'http://192.168.1.101:9099';

export const getAllChecklists = () => {
    return Taro.request({
        url: `${ROOT_URL}/api/checklists`,
    })
}

export const getChecklist = (id) => {
  return Taro.request({
    url: `${ROOT_URL}/api/checklists/${id}`,
  })
}

export const searchChecklists = (title) => {
  return Taro.request({
    url: `${ROOT_URL}/api/search?title=${title}`,
  })
}