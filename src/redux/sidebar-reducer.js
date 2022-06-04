let defaultState = {
    sidebar: {
        nameFriends: [
            { id: 1, name: 'Рома' },
            { id: 2, name: 'Кирилл' }
        ],
    },
}


const sidebarReducer = (state = defaultState, action) => {
    return state;
}
export default sidebarReducer;