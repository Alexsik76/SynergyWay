import axios from "axios";


const API_URL = 'http://localhost:8000/api';

function init(initialData) {
    return initialData;
}
async function getUsers(dispatch) {
    try {
        const response = await axios.get(`${API_URL}/users/`)
        dispatch({
            type: 'getUsers',
            payload: await response.data
        })
    } catch (error) {
        console.error(error);
    }
}

async function updateUser(dispatch, user) {
    try {
        const response = await axios.put(`${API_URL}/users/${user.pk}/`, user)
        await console.log('resp', response)
        dispatch({
            type: 'updateUser',
            user: await response.data
        })
    } catch (error) {
        console.error(error);
    }


}

async function deleteUser(dispatch, pk) {
    try {
        await axios.delete(`${API_URL}/users/${pk}/`)
        dispatch({type: 'deleteUser', pk})
    } catch (error) {
        console.error(error);
    }
}


const usersReducer = (state, action) => {
    switch (action.type) {
        case 'getUsers':
            state = action.payload;
            return state
        case 'deleteUser':
            return state.filter((obj) => {
                return obj.pk !== action.pk
            })
        case 'updateUser':
            console.log(state)
            state = state.filter((obj) => {
                return obj.pk !== action.user.pk
            })
            state.push(action.user)
            return state
        case 'reset':
            return init(action.payload);
        default:
            return state
    }
}
export {usersReducer, getUsers, updateUser, deleteUser, init}