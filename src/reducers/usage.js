import { ADD_BOOKMARK, UPDATE_PROGRESS, REMOVE_BOOKMARK } from '../constants/usage';

const initialState = {
    bookmarked: {},
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_BOOKMARK:
            return {
                ...state,
                bookmarked: Object.assign({ [action.payload]: [] }, state.bookmarked),
            }
        case REMOVE_BOOKMARK:
            return {
                ...state,
                bookmarked: JSON.parse(JSON.stringify(Object.assign(state.bookmarked, { [action.payload]: undefined }))),
            }
        case UPDATE_PROGRESS:
            return {
                ...state,
                bookmarked: Object.assign(state.bookmarked, { [action.payload.id]: action.payload.steps }),
            }
        default:
            return state;
    }
}