import axios from 'axios'

const API_URL = 'http://localhost:8080/api/v9';
const API_URL_LB= 'http://192.168.40.114:3000/api/';

export function getApiNoAuth(){
    return axios.create({
        baseURL: API_URL,
        timeout: 10000,
        withCredentials: false,
        headers: {
            'Access-Control-Allow-Origin': 'localhost:8080',
            'Content-Type': 'application/json'
        }
    })
}

export function getApiNoAuthLB(){
    return axios.create({
        baseURL: API_URL_LB,
        timeout: 10000,
        withCredentials: false,
        headers: {
            'Access-Control-Allow-Origin': '192.168.40.114:3000',
            'Content-Type': 'application/json'
        }
    })
}


