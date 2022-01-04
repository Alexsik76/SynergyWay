import axios from 'axios';
const API_URL = 'http://localhost:8000/api';

export default class UsersService{

    getUsers() {
        const url = `${API_URL}/users/`;
        return axios.get(url).then(response => response.data);
    }
    getUser(pk) {
        const url = `${API_URL}/users/${pk}`;
        return axios.get(url).then(response => response.data);
    }

    delete(user){
        const url = `${API_URL}/users/${user.pk}`;
        return axios.delete(url);
    }
    createUser(user){
        const url = `${API_URL}/users/`;
        return axios.post(url,user);
    }
    updateUser(user){
        const url = `${API_URL}/users/${user.pk}/`;
        return axios.put(url,user);
    }
}