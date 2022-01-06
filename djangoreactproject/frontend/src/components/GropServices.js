import axios from 'axios';
const API_URL = 'http://localhost:8000/api/';

export default class GroupsService{



    getGroups() {
        const url = `${API_URL}/Groups/`;
        return axios.get(url).then(response => response.data);
    }
    getGroupsByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    getGroup(pk) {
        const url = `${API_URL}/Groups/${pk}`;
        return axios.get(url).then(response => response.data);
    }
    deleteGroup(Group){
        const url = `${API_URL}/Groups/${Group.pk}`;
        return axios.delete(url);
    }
    createGroup(Group){
        const url = `${API_URL}/Groups/`;
        return axios.post(url,Group);
    }
    updateGroup(Group){
        const url = `${API_URL}/Groups/${Group.pk}`;
        return axios.put(url,Group);
    }
}