import {profileAPI, usersAPI} from "../api/api";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'

let defaultState = {
    postData: [
        {id: 1, message: 'Hi, how are u?', like: '5'},
        {id: 2, message: 'Its my first post', like: '25'},
        {id: 3, message: 'HEY', like: '2'},
        {id: 4, message: 'HOW ARE U?', like: '111'}
    ],
    newPostText: 'Check',
    profile: null,
    status: "",
};
const profileReducer = (state = defaultState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return {
                ...state, newPostText: '',
                postData: [...state.postData, {id: 5, message: state.newPostText, like: 0}]
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state, newPostText: action.newText
            }
        }
        case SET_STATUS: {
            return {
                ...state, status: action.status
            }
        }
        default:
            return state;
    }
}

export const getUserProfile = (userId) => (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            })
}
export const getStatus = (userId) => (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data));
            })
    }
export const updateStatus = (status) => (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            });
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text})

export default profileReducer;