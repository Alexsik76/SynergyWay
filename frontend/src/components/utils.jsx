import axios from "axios";
import useSWR from "swr";


function get_url(part) {
  let API_URL = "http://localhost:8000/api"
//   if (window.location.origin === "http://localhost:3000") {
//     API_URL = "http://localhost:8000/api";
// } else {
//     API_URL = `${window.location.origin}/api` ;
// }
  return `${API_URL}/${part}`;
}

async function fetcher(url) {
  try {
    axios.defaults.withCredentials = true;
    const res = await axios.get(url);
    return await res.data;
  } catch (error) {
    console.error(error);
  }
}

function useObjects(table_name) {
  const url = get_url(table_name)
  const { data, error, mutate } = useSWR(`${url}`, fetcher);
  return {
    data,
    isLoading: !error && !data,
    mutate,
  };
}

async function getAction(action_name, path, obj) {
  let url = get_url(path, action_name);
  switch (action_name) {
    case "create": {
      await axios.post(url, obj);
      break;
    }
    case "update": {
      await axios.put(`${url}/`, obj);
      break;
    }
  }
}

async function deleteObject(id, path_part) {
  const url = get_url(path_part);
  await axios.delete(url);
}

async function actionCreateOrUpdate(
  table_name,
  action_name,
  new_values,
  pk = ""
) {
  const path_part = `/${table_name}/${pk}`;
  await getAction(action_name, path_part, new_values);
}

class Field {
  constructor(name) {
    this.name = name;
  }
  get_init_value(obj) {
    return obj !== undefined ? obj[this.name] : "";
  }
}
function getFields(table_name) {
  return table_name === "users"
    ? {
        field1: new Field("username"),
        field2: new Field("group"),
      }
    : {
        field1: new Field("name"),
        field2: new Field("description"),
      };
}

export { get_url, useObjects, deleteObject, actionCreateOrUpdate, getFields };
