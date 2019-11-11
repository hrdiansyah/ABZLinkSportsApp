import { getApiNoAuthLB } from '../utils'

export default {
    // getAdmin(window){
    //     return getApiNoAuth()
    //     .get('/admins')
    //     .then(function(response){
    //         console.log(response)
    //         return response.data
    //     }).catch(function(err){
    //         console.log(err)
    //     })
    // },
    postCart(window, id_product, id_customer){
        return getApiNoAuthLB()
        .post('/carts/' ,{
            id_product : id_product,
            id_customer : id_customer
        })
        .then(function(response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    }
    // deleteAdmin(window, id){
    //     return getApiNoAuth()
    //     .delete('/admins/'.concat(id))
    //     .then(function(response){
    //         console.log(response)
    //         return response.data
    //     }).catch(function(err){
    //         console.log(err)
    //     })
    // },
    // putAdmin(window, id, username, password){
    //     return getApiNoAuth()
    //     .put('/admins/'+id ,{
    //         username : username,
    //         password : password
    //     })
    //     .then(function(response){
    //         console.log(response)
    //         return response.data
    //     }).catch(function(err){
    //         console.log(err)
    //     })
    // },
    // getAdminByName(window, username){
    //     return getApiNoAuth()
    //     .get('admins/getAdminByName?username='+username)
    //     .then(function(response){
    //         // console.log(response)
    //         return response
    //     }).catch(function(err){
    //         console.log(err)
    //     })
    // }
}