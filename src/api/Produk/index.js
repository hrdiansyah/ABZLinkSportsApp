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
        kuantity, product_kategory, product_desc, imgurl){
        return getApiNoAuthLB()
        .post('/Products/' ,{
            product_name : product_name,
            harga : harga,
            kuantity : kuantity,
            product_kategory : product_kategory,
            product_desc : product_desc,
            imgurl: 'http://localhost:3000/api/container/images/download/'+ product_name+ '.jpg'
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
    putproduct(window, id, product_name, harga, kuantity, product_kategory, product_desc,imgurl){
        return getApiNoAuthLB()
        .put('/Products/' + id ,{
            product_name: product_name,
            harga: harga,
            kuantity : kuantity,
            product_kategory : product_kategory,
            product_desc : product_desc,
            imgurl: imgurl

        })
        .then (function(response){
            console.log(response);
            
        })
        .catch (function(err){
            console.log(err);
            
        })
    }
}