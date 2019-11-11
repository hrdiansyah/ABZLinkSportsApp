
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
    
    getCartsbyId(window, id){
        
        return getApiNoAuthLB()
        .get('carts/' + id )
        .then(function(response){
            return response.data
        })
        .catch (function(err){
            console.log(err)
        })
    },
    
    getCart(window, id_customer){
        return getApiNoAuthLB()
            .get('carts',{
                id_customer : id_customer
            })
            .then(function(response){
                console.log(response)
                return response.data
            })
            .catch (function(err){
                console.log(err)
            })
        
    },
    postCart(window, id_product, id_customer, imgurl){
        return getApiNoAuthLB()
        .post('/carts/' ,{
            id_product : id_product,
            id_customer : id_customer,
            imgurl :imgurl
        })
        .then(function(response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },
    deleteCart(window, id){
    return getApiNoAuthLB()
    .delete('/carts/' .concat(id))
    .then (function(response){
        console.log(response)
        return response.data
    })
    .catch (function(err){
        console.log(err)
    })
    },
    putCart(window, id,id_product,id_customer){
        return getApiNoAuthLB()
        .put('/carts/' +id,{
            id_product: id_product,
            id_customer:id_customer
        })
        .then(function(response){
            console.log(response)
        })
        .catch(function(err){
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
