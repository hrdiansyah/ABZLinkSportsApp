import { getApiNoAuth,getApiNoAuthLB } from "../utils"

export default {
    getcontainerS(window){
        return getApiNoAuthLB()
        .get('container/images/files')
        .then(function(response){
            console.log(response)
            return response.data
        })
        .catch (function(err){
            console.log(err)
        })
    },
    getcontainer(window, file, container){
        return getApiNoAuthLB()
        .get('container/'+container+'/files/'+file)
        .then(function(response){
            console.log(response)
            return response.data
        })
        .catch (function(err){
            console.log(err)
        })
    },

    postcontainer(window, container,name){
        return getApiNoAuthLB()
            .post('/container/images/files/' ,{
                Nama : name,
                Container : container
            })
            .then(function(response){
                console.log(response)
                return response.data
            }).catch(function(err){
                console.log(err)
            })
        },

    deletecontainer(window, name){
        return getApiNoAuthLB()
        .delete('/container/images/files/'.concat(name))
            .then (function(response) {
                console.log(response)
                return response.data
            })
            .catch (function(err){
                console.log(err)
            })
        
    },
    putcontainer(window,id,Name, Container){
        return getApiNoAuthLB()
        .put('/employees/'+id,{
            Nama: Name,
            Container: Container

        })
        .then (function(response){
            console.log(response);
            
        })
        .catch (function(err){
            console.log(err);
            
        })
    }
}
