
import { getApiNoAuth } from '../utils'

export default {
      
    getCustbyId(window, id){
        
        return getApiNoAuth()
        .get('/users/' + id )
        .then(function(response){
            return response.data
        })
        .catch (function(err){
            console.log(err)
        })
    }
}
