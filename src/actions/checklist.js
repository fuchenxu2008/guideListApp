import { GET_ALL_CHECKLISTS, GET_CHECKLIST, CLEAR_CURRENT, SEARCH_LISTS, CLEAR_SEARCH_RESULT, START_SEARCH, UPDATE_SEARCH_PHRASE } from '../constants/checklist';
import * as api from '../api/checklist';

export const getAllChecklists = () => (dispatch) => {
    return api.getAllChecklists().then(res => {
        dispatch({
            type: GET_ALL_CHECKLISTS,
            payload: res.data,
        })
    })
}

    

export const getChecklist = (id) => (dispatch) => {
    return api.getChecklist(id).then(res => {
        dispatch({
            type: GET_CHECKLIST,
            payload: res.data,
        })
    })
};

export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT,
    };
};

export const searchChecklist = (title) => (dispatch) => {
    dispatch({
        type: START_SEARCH,
    })
    return api.searchChecklists(title).then(res => {
        dispatch({
            type: SEARCH_LISTS,
            payload: res.data,
        })
    })
}

export const clearSearchResult = () => {
  return {
    type: CLEAR_SEARCH_RESULT,
  };
};

export const updateSearchPhrase = (phrase) => {
  return {
    type: UPDATE_SEARCH_PHRASE,
    payload: phrase,
  };
};