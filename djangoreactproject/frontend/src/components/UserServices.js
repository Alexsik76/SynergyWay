import axios from 'axios';
const API_URL = 'http://localhost:8000/api';

export default class UsersService{

    // constructor(){}


    getUsers() {
        const url = `${API_URL}/users/`;
        return axios.get(url).then(response => response.data);
    }

    deleteUser(user){
        const url = `${API_URL}/users/${user.pk}`;
        return axios.delete(url);
    }
    createUser(user){
        const url = `${API_URL}/users/`;
        return axios.post(url,user);
    }
}