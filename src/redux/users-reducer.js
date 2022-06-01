const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let defaultState = {
    users: [
        {
            id: 1,
            photoUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png",
            followed: true,
            fullName: 'Рома',
            status: 'Im fine',
            location: {city: 'Russia', country: 'Penza'}
        },
        {
            id: 2,
            photoUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png",
            followed: true,
            fullName: 'Кирилл',
            status: 'Im fine too',
            location: {city: 'Russia', country: 'Moscow'}
        },
        {
            id: 3,
            photoUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png",
            followed: false,
            fullName: 'Дима',
            status: 'Im fine too',
            location: {city: 'Russia', country: 'Penza'}
        },
        {
            id: 4,
            photoUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png",
            followed: false,
            fullName: 'Влад',
            status: 'Im fine too',
            location: {city: 'Russia', country: 'Penza'}
        },
    ],

}
const usersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usersId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
            debugger;
        case UNFOLLOW:
            debugger;
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usersId) {
                        return {...u, followed: false}
                    }
                    return u;
                })

            }
            debugger;
        case SET_USERS: {
            return {...state, users: [...action.users]}
        }
        default:
            return state;
    }
}

export const followAC = (usersId) => ({type: FOLLOW, usersId})
export const unfollowAC = (usersId) => ({type: UNFOLLOW, usersId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export default usersReducer;