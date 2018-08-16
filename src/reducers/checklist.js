import { GET_ALL_CHECKLISTS, GET_CHECKLIST, CLEAR_CURRENT, SEARCH_LISTS, CLEAR_SEARCH_RESULT, START_SEARCH } from '../constants/checklist';

const initialState = {
    checklists: [],
    currentChecklist: null,
    searchResult: null,
    searching: false,
}

export default function checklist(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_CHECKLISTS:
            return {
                ...state,
                checklists: action.payload,
            }
        case GET_CHECKLIST:
            return {
                ...state,
                currentChecklist: action.payload,
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                currentChecklist: null,
            }
        case START_SEARCH:
            return {
                ...state,
                searching: true,
            }
        case SEARCH_LISTS:
            return {
                ...state,
                searchResult: action.payload,
            }
        case CLEAR_SEARCH_RESULT:
            return {
                ...state,
                searchResult: null,
                searching: false,
            }
        default:
            return state;
    }
}