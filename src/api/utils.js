import axios from 'axios'

const API_URL = 'http://localhost:8080/api/v9';

export function getApiNoAuth(){
    return axios.create({
        baseURL: API_URL,
        timeout: 10000,
        withCredentials: false,
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:8080',
            'Content-Type': 'application/json'
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
