import axios from 'axios'

const API_URL = 'http://localhost:8080/api/v9';

export function getApiNoAuth(){
    return axios.create({
        baseURL: API_URL,
        timeout: 10000,
        withCredentials: true,
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:8080',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
            'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization',
            'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin'
        }
    })
}

// //token 
// export function getApi(token, params){
//     if(params){ params.access_token = token } else {
//         params = {
//             access_token: token
//         }
//     }
//     return axios.create({
//         baseURL: API_URL,
//         timeout: 100000,
//         withCredentials: false,
//         params: params,
//         headers: {
//             'Access-Control-Allow-Origin': '*',
//             'Content-Type': 'application/json; charset=utf-8'
//         }
//     })
// }
