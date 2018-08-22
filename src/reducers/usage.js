import { ADD_TASK, UPDATE_PROGRESS, REMOVE_TASK, FINISH_TASK, RESTART_TASK, GET_PROCESSING_CHECKLISTS } from '../constants/usage';

const initialState = {
    processing: {},
    processingChecklists: [],
    finished: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                processing: Object.assign({ [action.payload.id]: [] }, state.processing),
                processingChecklists: state.processingChecklists.concat(action.payload),
            }
        case REMOVE_TASK:
            return {
                ...state,
                processing: JSON.parse(JSON.stringify(Object.assign(state.processing, { [action.payload.id]: undefined }))),
                processingChecklists: state.processingChecklists.filter(list => list.id !== action.payload.id),
            }
        case UPDATE_PROGRESS:
            return {
                ...state,
                processing: Object.assign(state.processing, { [action.payload.id]: action.payload.steps }),
            }
        case FINISH_TASK:
            return {
                ...state,
                finished: state.finished.filter(id => id !== action.payload.id).concat(action.payload.id),
                processing: JSON.parse(JSON.stringify(Object.assign(state.processing, { [action.payload.id]: undefined }))),
                processingChecklists: state.processingChecklists.filter(list => list.id !== action.payload.id),
            }
        case RESTART_TASK:
            return {
                ...state,
                finished: state.finished.filter(taskId => taskId !== action.payload.id),
                processing: Object.assign({ [action.payload.id]: [] }, state.processing),
                processingChecklists: state.processingChecklists.concat(action.payload),
            }
        case GET_PROCESSING_CHECKLISTS:
            return {
                ...state,
                processingChecklists: action.payload,
            }
        default:
            return state;
    }
}