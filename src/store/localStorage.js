import Taro from '@tarojs/taro';

const mayCleanCache = () => {
    const flag = 'clean_1';
    if (!Taro.getStorageSync(flag)) {
        Taro.clearStorageSync();
        Taro.setStorageSync(flag, true)
    }
}

export const loadState = () => {
    try {
        mayCleanCache();
        const serializedState = Taro.getStorageSync('state');
        return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (err) {
        console.log('Load state failed!');
        return undefined;
    }
}

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        Taro.setStorageSync('state', serializedState);
    } catch (err) {
        console.log('Save state failed!');
    }
}