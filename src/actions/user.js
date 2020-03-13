import { login } from '../requests';
import actionTypes from './actionTypes';

const startLogin = () => {
    return {
        type: actionTypes.START_LOGIN,
    }
}

const loginSuccess = (payload) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        payload,
    }
}

const loginFailed = () => {
    return {
        type: actionTypes.LOGIN_FAILED,
    }
}

export const loginAction = (userInfo) => {
    return (dispatch) => {
        dispatch(startLogin())
        login(userInfo)
        .then((resp) => {
            if(userInfo.remember === true) {
                window.localStorage.setItem('respUserInfo', JSON.stringify(resp.list[0]))
            } else {
                window.sessionStorage.setItem('respUserInfo', JSON.stringify(resp.list[0]))
            }
            dispatch(loginSuccess({
                ...resp.list[0],
                remember: userInfo.remember
            }))
        })
        .catch(() => {
            window.sessionStorage.removeItem('respUserInfo')
            window.localStorage.removeItem('respUserInfo')
            dispatch(loginFailed())
            console.log('err')
        })
    }
}

export const logoutAction = () => {
    return (dispatch) => {
        window.sessionStorage.removeItem('respUserInfo')
        window.localStorage.removeItem('respUserInfo')
        dispatch(loginFailed())
    }
}