
export type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
export type UserType = {
    id: number
    followed: boolean,
    name: string
    status: string
    location: LocationType
    photos: string
}
type LocationType = {
    city: string
    country: string
}
let initialState: UsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
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
            return {...state, users: action.users}
        }
        case 'SET_CURRENT_PAGE':{
            return {...state, currentPage: action.currentPage}
        }
        case "SET_TOTAL_USER_COUNT":{
            return {...state, totalUsersCount: action.pageNumber}
        }
        default :{
                return state
            }
    }
}
export const setCurrentPageAC = (currentPage: number):SetCurrentPageACType => {
    return {type: 'SET_CURRENT_PAGE', currentPage: currentPage}
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
export const setTotalUserCountAC = (pageNumber: number): setTotalUserCountACType => {
    return{type: 'SET_TOTAL_USER_COUNT', pageNumber: pageNumber}
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
export type SetCurrentPageACType =  {
    type:'SET_CURRENT_PAGE'
    currentPage: number
}
export type setTotalUserCountACType = {
    type: 'SET_TOTAL_USER_COUNT'
    pageNumber: number
}
type UserReducerActionType = FollowACType  |  UnFollowACType | SetUSerACType | SetCurrentPageACType | setTotalUserCountACType;