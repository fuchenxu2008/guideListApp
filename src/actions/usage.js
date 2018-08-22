import { ADD_TASK, UPDATE_PROGRESS, REMOVE_TASK, RESTART_TASK, FINISH_TASK, GET_PROCESSING_CHECKLISTS } from "../constants/usage";
import * as api from '../api/checklist';

export const addTask = (list) => {
  return {
    type: ADD_TASK,
    payload: list,
  };
};

export const removeTask = (list) => {
  return {
    type: REMOVE_TASK,
    payload: list,
  };
};

export const updateProgress = (id, steps) => {
  return {
    type: UPDATE_PROGRESS,
    payload: { id, steps },
  };
};

export const finishTask = (list) => {
  return {
    type: FINISH_TASK,
    payload: list,
  };
};

export const restartTask = (list) => {
  return {
    type: RESTART_TASK,
    payload: list,
  };
};

export const getProcessingChecklists = (idArr) => (dispatch) => {
  return api.getProcessingChecklists(idArr).then(res => {
    dispatch({
      type: GET_PROCESSING_CHECKLISTS,
      payload: res.data,
    })
  })
};