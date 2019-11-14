import { getApiNoAuthLB } from "../utils"

export default {
    getdiscount(window){
        return getApiNoAuthLB()
        .get('/diskons')
        .then(function(response){
            console.log(response)
            return response.data
        })
        .catch (function(err){
            console.log(err)
        })
    },
    
    postdiscount(window, diskon, potongan, nilai, imgurl){
        return getApiNoAuthLB()
        .post('/diskons/' ,{
            diskon : diskon,
            potongan : potongan,
            nilai : nilai,
            // imgurl: 'http://localhost:3000/api/containerdsc/imagesdsc/download/'+ diskon + '.jpg' })
            imgurl: 'http://192.168.40.114:3000/api/containerdsc/imagesdsc/download/'+ diskon+ '.jpg'
        })
        .then(function(response){
        console.log(response)
        return response.data
        }).catch(function(err){
        console.log(err)
        })
    },

    deletediscount(window, id){
        return getApiNoAuthLB()
        .delete('/diskons/'.concat(id))
        .then (function(response) {
        console.log(response)
        return response.data
        })
        .catch (function(err){
        console.log(err)
        })
    },
    putdiscount(window, id, diskon, potongan, nilai, imgurl){
        return getApiNoAuthLB()
        .put('/diskons/' + id ,{
            diskon: diskon,
            potongan: potongan,
            nilai : nilai,
            imgurl: imgurl
        })
        .then (function(response){
            console.log(response);
            
        })
        .catch (function(err){
            console.log(err);
            
        })
    },

    downloadImages(window, file){
        return getApiNoAuthLB()
        .get('containerdsc/imagesdsc/download/'+file)
        .then(function(response){
            return response.config
        })
        .catch (function(err){
            console.log(err)
        })
    },
    getdiscountbyId(window, id){
        
        return getApiNoAuthLB()
        .get('diskons/' + id )
        .then(function(response){
            return response.data
        })
        .catch (function(err){
            console.log(err)
        })
    },
}