
export type UsersType = {
    users: Array<UserType>
}
export type UserType = {
    id: number
    followed: boolean,
    fullName: string
    status: string
    location: LocationType
    photoUrl: string
}
type LocationType = {
    city: string
    country: string
}
let initialState: UsersType = {
    users: []
}
export const userReducer = (state = initialState, action:UserReducerActionType) => {
    switch (action.type) {

        case 'FOLLOW': {
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userID){
                        return {...user, followed: true}
                    }
                    return user
                } )
            }
        break;
        }
        case 'UNFOLLOW': {
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userID){
                        return{...user, followed: false}
                    }
                    return user
                })
            }

        break;
        }
        case 'USERS': {
            return {...state, users: [...state.users, ...action.users]}
        }
            default :{
                return state
            }
    }
}
export const followAC = (userID: number):FollowACType => {
    return{type: 'FOLLOW', userID}
}
export const unfollowAC = (userID: number):UnFollowACType => {
    return{type: 'UNFOLLOW', userID}
}
export const setUsersAC = (users: Array<UserType>) => {
    return{type:'USERS', users}
}
export type SetUSerACType = {
    type: 'USERS'
    users: Array<UserType>
}
export type FollowACType = {
    type: 'FOLLOW'
    userID: number
}
export type UnFollowACType = {
    type: 'UNFOLLOW'
    userID: number
}
type UserReducerActionType = FollowACType  |  UnFollowACType | SetUSerACType;