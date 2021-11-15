import axios from "axios";
import { API_URL } from '../assets/constant'

const authAxios = axios.create({
    baseURL: API_URL,
});

const commonAxios = axios.create({
    baseURL: API_URL
});

commonAxios.interceptors.request.use(req => {
    const token = localStorage.getItem('token');
    if (token) {
        req.headers["Authorization"] = `Bearer ${token}`;
    }
    return req;
});

export { commonAxios as axios, authAxios };