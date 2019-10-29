import axios from 'axios'

const API_URL = 'http://localhost:8888/api/v9/';

export function getApiNoAuth() 
    {   
        return axios.create (
            {
            baseURL : API_URL,
            timeout : 10000,
            withCredentials : true,
            header : {
                'Access-Control-Allow-Origin' : '*',
                'Content-type' : 'application/json'
            }
        })
    }