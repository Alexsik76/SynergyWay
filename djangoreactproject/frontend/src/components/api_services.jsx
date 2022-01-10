import axios from "axios";
import useSWR from 'swr'


const API_URL = 'http://localhost:8000/api';

function get_url(part) {
    return `${API_URL}${part}`
}

async function fetcher(url) {
    try {
        const res = await axios.get(url)
        return await res.data
    } catch (error) {
        console.error(error);
    }
}

function useUsers() {
    const {data, error, mutate} = useSWR(`${API_URL}/users/`, fetcher)
    return {
        data,
        isLoading: !error && !data,
        mutate
    };
}

function useGroups() {
    const {data, error, mutate} = useSWR(`${API_URL}/groups/`, fetcher)
    return {
        data,
        isLoading: !error && !data,
        mutate
    };
}

async function createObject(obj, path_part) {
    const url = get_url(path_part)
    try {
        await axios.post(url, obj)
    } catch (error) {
        console.error(error);
    }
}

async function updateObject(obj, path_part) {
    const url = get_url(path_part)
    try {
        await axios.put(url, obj)
    } catch (error) {
        console.error(error);
    }
}


async function deleteObject(id, path_part) {
    const url = get_url(path_part)
    try {
        await axios.delete(url)
    } catch (error) {
        console.error(error);
    }
}


export {get_url, useUsers, createObject, updateObject, deleteObject, useGroups}