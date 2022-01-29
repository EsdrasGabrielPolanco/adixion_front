import axios from "axios"
import {urlServer} from "../config/credentials"

export const login = async (data) => {
    const response = await axios.post(`${urlServer}login`, data);
   
    return response;
}
export const register = async (data) => {
    const response = await axios.post(`${urlServer}signup`, data);
   
    return response;
}

