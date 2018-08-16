import Taro from '@tarojs/taro';

const ROOT_URL = 'https://guide.kyrie.top';

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