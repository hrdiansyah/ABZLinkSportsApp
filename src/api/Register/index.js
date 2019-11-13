import { getApiNoAuth } from '../utils.js'

export default {
    postUser(credentials, window, firstName, lastName, email, password, alamat, telp, jeniskelamin) {
        return getApiNoAuth()
            .post('/users', {
                firstName: firstName,
                lastName: lastName,
                email:email,
                password:password,
                alamat: alamat,
                telp: telp,
                jeniskelamin: jeniskelamin
            })
            .then(function (response){
                console.log(response)
                return response.data
            }).catch(function(err){
                console.log(err)
            })  
    },
}