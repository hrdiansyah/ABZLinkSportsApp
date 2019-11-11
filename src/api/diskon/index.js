import { getApiNoAuthLB } from '../utils'

export default {
    getDiskon(window){
        return getApiNoAuthLB()
        .get('/diskons')
        .then(function(response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },
    // postCart(window, id_product, id_customer){
    //     return getApiNoAuthLB()
    //     .post('/carts/' ,{
    //         id_product : id_product,
    //         id_customer : id_customer
    //     })
    //     .then(function(response){
    //         console.log(response)
    //         return response.data
    //     }).catch(function(err){
    //         console.log(err)
    //     })
    // }
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
    // getkurirByName(window, kurir){
    //     return getApiNoAuthLB()
    //     .get('/pengirimans/getpengirimanBykurir?pengiriman_kurir='+kurir)
    //     .then(function(response){
    //         // console.log(response)
    //         return response
    //     }).catch(function(err){
    //         console.log(err)
    //     })
    // }
}