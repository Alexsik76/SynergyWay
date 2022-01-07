import axios from "axios";


const API_URL = 'http://localhost:8000/api';

function init(initialData) {
    return initialData;
}

async function deleteUser(dispatch, pk) {
    try {
        await axios.delete(`${API_URL}/users/${pk}/`)
        dispatch({type: 'deleteUser', pk})
    } catch (error) {
        console.error(error);
    }
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

const usersReducer = (state, action) => {
    switch (action.type) {
        case 'getUsers':
            state = action.payload;
            return state
        case 'deleteUser':
            return state.filter((obj) => {
                return obj.pk !== action.pk
            })
        case 'reset':
            return init(action.payload);
        default:
            return state
    }
}
export {usersReducer, getUsers, deleteUser, init}