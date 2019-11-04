import { getApiNoAuth } from '../utils.js'

export default {

    postUser(window, firstName, lastName, email, password, role){
        return getApiNoAuth()
        .post('/users',{
            firstName : firstName,
            lastName : lastName,
            email : email,
            password : password,
            role : "Customer"
        })
        .then(function(response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    }
}
