import axios from "axios";
import useSWR, { useSWRConfig } from 'swr'




const API_URL = 'http://localhost:8000/api';
// const fetcher = url => axios.get(url).then(res => res.data)
//
//
// function useUsers () {
// const { data, error, mutate } = useSWR(`${API_URL}/users/`, fetcher)
//
//   return {
//     data:{
//     users: data},
//     isLoading: !error && !data,
//     isError: error,
//     my_mutate: mutate
//   }
// }



// async function getUsers(dispatch) {
//     try {
//         const response = await axios.get(`${API_URL}/users/`)
//         dispatch({
//             type: 'getUsers',
//             payload: await response.data
//         })
//     } catch (error) {
//         console.error(error);
//     }
// }
async function createUser(user) {

    try {
        const resp = await axios.post(`${API_URL}/users/`, user)
        // dispatch({
        //     type: 'createUser',
        //     user: await response.data
        // })
        return await resp.data
    } catch (error) {
        console.error(error);
    }
}

async function updateUser(dispatch, user) {
    try {
        const response = await axios.put(`${API_URL}/users/${user.pk}/`, user)
        dispatch({
            type: 'updateUser',
            user: await response.data
        })
    } catch (error) {
        console.error(error);
    }
}

async function deleteUser(pk) {
    try {
        await axios.delete(`${API_URL}/users/${pk}/`)
        // dispatcher({type: 'deleteUser', pk})

    } catch (error) {
        console.error(error);
    }
}

export {createUser, deleteUser}