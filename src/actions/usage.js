import { ADD_BOOKMARK, UPDATE_PROGRESS, REMOVE_BOOKMARK } from "../constants/usage";

export const addBookmark = (id) => {
  return {
    type: ADD_BOOKMARK,
    payload: id,
  };
};

export const removeBookmark = (id) => {
  return {
    type: REMOVE_BOOKMARK,
    payload: id,
  };
};

export const updateProgress = (id, steps) => {
  return {
    type: UPDATE_PROGRESS,
    payload: { id, steps },
  };
};