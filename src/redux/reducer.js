import { SET_SMURF_NAME, FETCH_SMURF_DATA, SAVE_SMURF_DATA } from './constants';

const INITIAL_STATE = {
    smurfName: null,
    loading: false,
    smurfData: [],
};
function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_SMURF_DATA:
            return {
                ...state,
                loading: true,
            }
        case SAVE_SMURF_DATA:
            return {
                ...state,
                loading: false,
                smurfData: action.response,
            }
        case SET_SMURF_NAME:
            return {
                ...state,
                smurfName: action.smurfName,
            }
        default:
            state;
    }
}
export default reducer;