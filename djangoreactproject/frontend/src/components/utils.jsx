import axios from "axios";
import useSWR from "swr";

const API_URL = "http://localhost:8000/api";

function get_url(part) {
  return `${API_URL}${part}`;
}

async function fetcher(url) {
  try {
    const res = await axios.get(url);
    return await res.data;
  } catch (error) {
    console.error(error);
  }
}

function useObjects(table_name) {
  const { data, error, mutate } = useSWR(`${API_URL}/${table_name}/`, fetcher);
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
    case "delete":
      await axios.delete(url, obj);
      break;
  }
}

async function deleteObject(id, path_part) {
  const url = get_url(path_part);
  await axios.delete(url);
}

async function actionCreateOrUpdate({
  initVals,
  action_name,
  new_val1,
  new_val2,
  mutate,
} = {}) {
  const path_part = `/${initVals.table}/${initVals.obj_pk}`;
  const newObject = {};
  newObject[initVals.field1Name] = new_val1;
  newObject[initVals.field2Name] = new_val2;
  await getAction(action_name, path_part, newObject);
  await mutate();
}

function getInitValues(table, action, obj) {
  let initValues = {};
  switch (table) {
    case "users": {
      initValues.table = "users";
      initValues.field1Name = "username";
      initValues.field2Name = "group";
      break;
    }
    case "groups": {
      initValues.table = "groups";
      initValues.field1Name = "name";
      initValues.field2Name = "description";
      break;
    }
  }
  switch (action) {
    case "create": {
      initValues.field1Val = "";
      initValues.field2Val = "";
      initValues.obj_pk = "";
      break;
    }
    case "update": {
      initValues.field1Val = obj[initValues.field1Name];
      initValues.field2Val = obj[initValues.field2Name];
      initValues.obj_pk = obj["pk"];
      break;
    }
  }
  return initValues;
}

export {
  get_url,
  useObjects,
  deleteObject,
  actionCreateOrUpdate,
  getInitValues,
};
