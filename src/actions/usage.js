import { ADD_TASK, UPDATE_PROGRESS, REMOVE_TASK, RESTART_TASK, FINISH_TASK } from "../constants/usage";

export const addTask = (id) => {
  return {
    type: ADD_TASK,
    payload: id,
  };
};

export const removeTask = (id) => {
  return {
    type: REMOVE_TASK,
    payload: id,
  };
};

export const updateProgress = (id, steps) => {
  return {
    type: UPDATE_PROGRESS,
    payload: { id, steps },
  };
};

export const finishTask = (id) => {
  return {
    type: FINISH_TASK,
    payload: id,
  };
};

export const restartTask = (id) => {
  return {
    type: RESTART_TASK,
    payload: id,
  };
};