import axios from "axios"
import {URL} from "./Url"


export const getAllBook = async()=>{
    const response = await axios.get(`${URL}/api/v1/book/getAllBook`)
    return response.data
}

export const getDetails = async(id)=>{
    const response = await axios.get(`${URL}/api/v1/book/getBook/${id}`)
    return response.data
}

export const addBook = async(data)=>{
    const response = await axios.post(`${URL}/api/v1/book/addBook`,data)
    return response.data
}

export const editBook = async(id,data)=>{
    const response = await axios.put(`${URL}/api/v1/book/update/${id}`,data)
    return response.data
}

