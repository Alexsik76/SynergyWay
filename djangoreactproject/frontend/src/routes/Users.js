import React from 'react'
import TableRow from '../components/TableRow'

// import {usersReducer, getUsers, createUser, updateUser, deleteUser, init} from "../components/reducer";
import Loader from "react-loader-spinner";
import {Button} from "react-bootstrap";
import {deleteUser, createUser} from "../components/api_services";
import axios from "axios";
import useSWR from "swr";
import ModalCreate from "../components/ModalCreate";

const API_URL = 'http://localhost:8000/api';
const fetcher = url => axios.get(url).then(res => res.data)

function useUsers () {
const { data, error, mutate } = useSWR(`${API_URL}/users/`, fetcher)
console.log(data)
  return {
    data,
    isLoading: !error && !data,
    mutate
  }
}
export default function UsersList() {

    const {data, isLoading, mutate} = useUsers()
    // const {localUsers, setUsers} = useState(users)
    // const [local_users, dispatcher] = useReducer(reducer, users);
    // console.log(users_n, isLoading)

    const createFn = async (new_user) => {
        const n_u = await createUser(new_user)
        await mutate([...data, n_u])
    }

    // const updateFn = (new_user) => {
    //     updateUser(usersDispatch, new_user)
    // }

    // useEffect(() => {
    //     setUsers(users)
    // }, []);
    async function deleteUser(id) {
    try {
        await axios.delete(`${API_URL}/users/${id}/`)
        const new_data = await data.filter((obj) => {
            return obj.id !== id
        })
        await mutate(new_data)
    } catch (error) {
        console.error(error);
    }
}


    return (
        <div className="users--list">
        <ModalCreate userCreate={createFn}/>
            <table className="table table-hover">
                <thead key="thead" className="thead-dark">
                <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Group</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    (isLoading) ?
                    <tr>
                        <td colSpan="4" align="center">
                            <Loader type="Bars" color="#00BFFF" height={80} width={80}/>
                        </td>
                    </tr>
                        :
                    data.map(c =>
                        <tr key={c.pk}>
                            < TableRow user={c}
                            />
                            <td>
                                {/*<ModalUpdate user={c} userUpdate={updateFn}/>*/}
                            </td>
                            <td>
                                <Button variant="outline-danger" onClick={() => {
                                    deleteUser(c.pk)


                                }
                                }
                                >
                                    Delete user
                                </Button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>

    )

}
