import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';


let defaultState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
}
const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            debugger
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}})
export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.getMe()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    dispatch(setAuthUserData(id, email, login));
                }
            });
    }
}
export default authReducer;