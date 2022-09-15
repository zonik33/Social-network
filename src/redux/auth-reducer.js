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
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        default:
            return state;
    }
}

export const getAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}})
export const authMe = () => {
    return (dispatch) => {
        authAPI.getMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data;
                    dispatch(getAuthUserData(id, email, login));
                }
            });
    }
}
export default authReducer;