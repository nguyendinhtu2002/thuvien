import axios from "axios"
import {URL} from "./Url"
export const loginUser = async (data) => {
    const res = await axios.post(`${URL}/api/v1/user/login`, data)
    
    return res.data
}