const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let defaultState = {
    postData: [
    {id: 1, message: 'Hi, how are u?', like: '5'},
    {id: 2, message: 'Its my first post', like: '25'},
    {id: 3, message: 'HEY', like: '2'},
    {id: 4, message: 'HOW ARE U?', like: '111'}
],
    newPostText: 'Check'
}
const profileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_POST:
            debugger;
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0
            };
            let copyState = {...state}
            copyState.postData = [...state.postData]
            copyState.postData.push(newPost);
            copyState.newPostText = '';

            return copyState;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () =>({type: ADD_POST})
/*
{
    return{
        type: ADD_POST
}
}
* */
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default profileReducer;