import VueResource from 'vue-resource'
import Vue from 'vue'
import {getApiNoAuth} from '../utils.js'

Vue.use(VueResource)

export default{
    getDataRoles(window){
        return getApiNoAuth()
        .get('http://localhost:3000/api/roles')
        .then(function (response){
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },
}