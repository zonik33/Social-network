import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
let state = {
    postData: [
        {id: 1, message: 'Hi, how are u?', like: '5'},
        {id: 2, message: 'Its my first post', like: '25'},
        {id: 3, message: 'HEY', like: '2'},
        {id: 4, message: 'HOW ARE U?', like: '111'}
    ]
};

test('length of posts should be inc.', () => {
    let action = addPostActionCreator("hi!")
    let newState = profileReducer(state, action);
    expect(newState.postData.length).toBe(5);
});
test('message of new post should be correct', () => {
    let action = addPostActionCreator("hi!")
    let newState = profileReducer(state, action);
    expect(newState.postData[4].message).toBe("hi!");
});
test('like of new post should be correct', () => {
    let action = addPostActionCreator("hi!")
    let newState = profileReducer(state, action);
    expect(newState.postData[4].like).toBe(0);
});
test('delete post', () => {
    let action = deletePost(1)
    let newState = profileReducer(state, action);
    expect(newState.postData.length).toBe(3);
});
test('dont delete post if ID incorrect', () => {
    let action = deletePost(12)
    let newState = profileReducer(state, action);
    expect(newState.postData.length).toBe(4);
});