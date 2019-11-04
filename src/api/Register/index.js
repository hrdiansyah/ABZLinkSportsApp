import { getApiNoAuth } from '../utils.js'

export default {
    postUser(credentials, window) {
        return getApiNoAuth().post('/users', credentials)
            .then(function (response){
                console.log(response)
                return response.data
            }).catch(function(err){
                console.log(err)
            })  
    },
}