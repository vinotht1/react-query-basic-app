import axios from "axios";
import { config, EndPoints } from "./config";

const SECONDS = 30;
const MILISECONDS = 1000;
const TIMEOUT = SECONDS * MILISECONDS;

const instance = axios.create({
  baseURL: config.url,
  timeout: TIMEOUT,
});

const API = {
  get: async (key, params = {}, id) => {
    const url = EndPoints[key].url + (id ? `/${id}` : "");
    async function getData() {
      return instance.get(url, {
        params,
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    }
    const getdata = await getData();
    return getdata?.data;
  },

  post: async (key, data = {}, id = "") => {
    const url = EndPoints[key].url + (id ? `/${id}` : "");
    async function getData() {
      return instance({
        method: "POST",
        url: url,
        data: data,
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    }
    const postData = await getData();
    return postData?.data;
  },

  patch: async (key, data = {}, id = "") => {
    const url = EndPoints[key].url + (id ? `/${id}` : "");
    async function getData() {
      return instance({
        method: "PATCH",
        url: url,
        data: data,
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    }
    const patchData = await getData();
    return patchData?.data;
  },

  delete: async (key, data = {}, id = "") => {
    const url = EndPoints[key].url + (id ? `/${id}` : "");
    async function getData() {
      return instance({
        method: "DELETE",
        url: url,
        data: data,
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    }
    const deleteData = await getData();
    return deleteData?.data;
  },
};
export default API;
