import { getApiNoAuthLB } from "../utils"

export default {
    getproduct(window){
        return getApiNoAuthLB()
        .get('Products')
        .then(function(response){
            console.log(response)
            return response.data.sort((a, b) => new Date(b.createAt) - new Date(a.createAt))
        })
        .catch (function(err){
            console.log(err)
        })
    },
    
    postproduct(window, product_name, harga,
        kuantity, product_kategori, product_desc,imgurl){
            console.log(product_name, harga,
                kuantity, product_kategori, product_desc,imgurl)
        return getApiNoAuthLB()
        .post('/Products/' ,{
            product_name : product_name,
            harga : harga,
            kuantity : kuantity,
            product_kategori : product_kategori,
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

   
    putproduct(window,id, product_name, harga, kuantity, product_kategori, product_desc,imgurl , createAt){
        concole('api', id, product_name, harga, kuantity, product_kategori, product_desc, imgurl, createAt)
        return getApiNoAuthLB()
        .put('/Products/' + id ,{
            product_name: product_name,
            harga: harga,
            kuantity : kuantity,
            product_kategori : product_kategori,
            product_desc : product_desc,
            imgurl: imgurl,
            createAt : createAt
        })
        .then (function(response){
            console.log(response);
            
        })
        .catch (function(err){
            console.log(err);
            
        })
    },

    downloadImage(window, file){
        return getApiNoAuthLB()
        .get('container/images/download/'+file)
        .then(function(response){
            return response.config
        })
        .catch (function(err){
            console.log(err)
        })
    },
    getproductbyId(window, id){
        console.log(id)
        return getApiNoAuthLB()
        .get('/Products/' + id )
        .then(function(response){
            return response.data;
            console.log(response)
        })
        .catch (function(err){
            console.log(err)
        })
    },
    postchart(window, id_product, id_customer, catatan,
        kuantity, diskon, kurir, total){
        return getApiNoAuthLB()
        .post('/charts/' ,{
            id_product : id_product,
            id_customer : id_customer,
            catatan : catatan,
            kuantity : kuantity,
            diskon : diskon,
            kurir : kurir,
            total : total
        })
        .then(function(response){
        console.log(response)
        return response.data
        }).catch(function(err){
        console.log(err)
        })
    },
    getProductByKat(window, product_kategori){
        return getApiNoAuthLB()
        .get('/Products/getProductByKat?product_kategori='+product_kategori)
        .then(function(response){
            console.log(response)
            return response
        }).catch(function(err){
            console.log(err)
        })
    },
    getProductByName(window, product_Name){
        return getApiNoAuthLB()
        .get('/Products/getProductByName?product_Name='+product_Name)
        .then(function(response){
            console.log(response)
            return response
        }).catch(function(err){
            console.log(err)
        })
    }
}