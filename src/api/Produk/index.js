import { getApiNoAuthLB } from "../utils"

export default {
    getproduct(window){
        return getApiNoAuthLB()
        .get('Products')
        .then(function(response){
            console.log(response)
            return response.data
        })
        .catch (function(err){
            console.log(err)
        })
    },
    
    postproduct(window, product_name, harga,
        kuantity, product_kategory, product_desc){
        return getApiNoAuthLB()
        .post('/Products/' ,{
            product_name : product_name,
            harga : harga,
            kuantity : kuantity,
            product_kategory : product_kategory,
            product_desc : product_desc
        })
        .then(function(response){
        console.log(response)
        return response.data
        }).catch(function(err){
        console.log(err)
        })
    },

    deleteproduct(window, id){
        return getApiNoAuthLB()
        .delete('/Products/'.concat(id))
        .then (function(response) {
        console.log(response)
        return response.data
        })
        .catch (function(err){
        console.log(err)
        })
    },
    putproduct(window, id, product_name, harga, kuantity, product_kategory, product_desc){
        return getApiNoAuthLB()
        .put('/Products/' + id ,{
            product_name: product_name,
            harga: harga,
            kuantity : kuantity,
            product_kategory : product_kategory,
            product_desc : product_desc

        })
        .then (function(response){
            console.log(response);
            
        })
        .catch (function(err){
            console.log(err);
            
        })
    }
}