import { getApiNoAuthLB } from "../utils"

export default {
    getowner(window){
        return getApiNoAuthLB()
        .get('owners')
        .then(function(response){
            console.log(response)
            return response.data
        })
        .catch (function(err){
            console.log(err)
        })
    },
    postowner(window, Nama, JenisKelamin,
        TanggalLahir, NoTelepon, Email)
        {
            return getApiNoAuthLB()
            .post('/owners/' ,{
            Nama : Nama,
            JenisKelamin : JenisKelamin,
            TanggalLahir : TanggalLahir,
            NoTelepon : NoTelepon,
            Email : Email
            })
.then(function(response){
console.log(response)
return response.data
}).catch(function(err){
console.log(err) 
})
},

deleteowner(window, id){
return getApiNoAuthLB()
.delete('/owners/'.concat(id))
.then (function(response) {
console.log(response)
return response.data
})
.catch (function(err){
console.log(err)
 })
        
    },
    putowner(window,id,Nama, JenisKelamin,TanggalLahir,NoTelepon,Email){
        return getApiNoAuthLB()
        .put('/owners/'+id,{
            Nama: Nama,
            JenisKelamin: JenisKelamin,
            TanggalLahir : TanggalLahir,
            NoTelepon : NoTelepon,
            Email : Email

        })
        .then (function(response){
            console.log(response);
            
        })
        .catch (function(err){
            console.log(err);
            
        })
    }
}