import { usersAPI} from "../API/API";

export type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    folowingInProgress: Array<number>

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
    currentPage: 1,
    isFetching: true,
    folowingInProgress: []
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
        case "TOGGLE_IS_FETCHING":{
            return {...state, isFetching: action.isFetching}
        }
        case 'TOGGLE_IS_FOLOWING_PROGRESS':{
                return {...state,
                    folowingInProgress: action.isFetching
                            ? [...state.folowingInProgress, action.userId]
                            : state.folowingInProgress.filter(id => id !== action.userId) }
        }
        default :{
                return state
            }
    }
}
export const setCurrentPage = (currentPage: number):SetCurrentPageACType => {
    return {type: 'SET_CURRENT_PAGE', currentPage: currentPage}
}
export const acceptFollow = (userID: number):FollowACType => {
    return{type: 'FOLLOW', userID}
}
export const acceptUnfollow = (userID: number):UnFollowACType => {
    return{type: 'UNFOLLOW', userID}
}
export const setUsers = (users: Array<UserType>) => {
    return{type:'USERS', users}
}
export const setTotalUserCount = (pageNumber: number): setTotalUserCountACType => {
    return{type: 'SET_TOTAL_USER_COUNT', pageNumber: pageNumber}
}
export const setIsFetching = (isFetching: boolean):setToggleIsFetchingType => {
    return{type: 'TOGGLE_IS_FETCHING', isFetching: isFetching }
}
export const toggleIsFolowingProgress = (isFetching: boolean, userId: number):toggleIsFolowingProgressType=> {
    return{type: 'TOGGLE_IS_FOLOWING_PROGRESS', isFetching: isFetching, userId: userId }
}
export type toggleIsFolowingProgressType = {
    type: 'TOGGLE_IS_FOLOWING_PROGRESS',
    isFetching: boolean
    userId: number

}
export type setToggleIsFetchingType = {
    type: 'TOGGLE_IS_FETCHING'
    isFetching: boolean
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
type UserReducerActionType = FollowACType  |  UnFollowACType | SetUSerACType
    | SetCurrentPageACType | setTotalUserCountACType | setToggleIsFetchingType
    | toggleIsFolowingProgressType;

export const requestUsersThunkCreater = (page: number, pageSize: number) => {

 return   (dispatch: any) => {
        dispatch(setIsFetching(true))
        dispatch(setCurrentPage(page))
        usersAPI.getUsers(page, pageSize).then(data => {
            dispatch(setIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUserCount(data.totalCount))
        })
    }
}
export const onPageSizeThunkCreater = (pageNumber: number, pageSize: number) => {
    return (dispatch: any) => {
        dispatch(setIsFetching(true))
        dispatch(setCurrentPage(pageNumber))
        usersAPI.getUsers(pageNumber, pageSize).then(data => {
            dispatch(setUsers(data.items))
            dispatch(setIsFetching(false))
        })
    }
}
export const follow = (userId: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFolowingProgress(true, userId))
        usersAPI.setFollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(acceptFollow(userId))
            }
           dispatch(toggleIsFolowingProgress(false, userId))
        })
    }
}
export const unfollow = (userId: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFolowingProgress(true, userId))
        usersAPI.setUnfollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(acceptUnfollow(userId))
            }
            dispatch(toggleIsFolowingProgress(false, userId))
        })
    }
}