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
    
    postproduct(window, productname, harga,
        kuantity, productkategory, productdesc){
        return getApiNoAuthLB()
        .post('/Products/' ,{
            productname : productname,
            harga : harga,
            kuantity : kuantity,
            productkategory : productkategory,
            productdesc : productdesc
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
    putproduct(window, id, productname, harga, kuantity, productkategory, productdesc){
        return getApiNoAuthLB()
        .put('/Products/'+id,{
            productname: productname,
            harga: harga,
            kuantity : kuantity,
            productkategory : productkategory,
            productdesc : productdesc

        })
        .then (function(response){
            console.log(response);
            
        })
        .catch (function(err){
            console.log(err);
            
        })
    }
}