import { ADD_TASK, UPDATE_PROGRESS, REMOVE_TASK, FINISH_TASK, RESTART_TASK } from '../constants/usage';

const initialState = {
    processing: {},
    finished: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                processing: Object.assign({ [action.payload]: [] }, state.processing),
            }
        case REMOVE_TASK:
            return {
                ...state,
                processing: JSON.parse(JSON.stringify(Object.assign(state.processing, { [action.payload]: undefined }))),
            }
        case UPDATE_PROGRESS:
            return {
                ...state,
                processing: Object.assign(state.processing, { [action.payload.id]: action.payload.steps }),
            }
        case FINISH_TASK:
            return {
                ...state,
                finished: state.finished.filter(id => id !== action.payload).concat(action.payload),
                processing: JSON.parse(JSON.stringify(Object.assign(state.processing, { [action.payload]: undefined }))),
            }
        case RESTART_TASK:
            return {
                ...state,
                finished: state.finished.filter(taskId => taskId !== action.payload),
                processing: Object.assign({ [action.payload]: [] }, state.processing),
            }
        default:
            return state;
    }
}