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
<<<<<<< HEAD
        TanggalLahir, NoTelepon, Email)
        {
            return getApiNoAuthLB()
            .post('/owners/' ,{
=======
        TanggalLahir, NoTelepon, Email){
        return getApiNoAuthLB()
        .post('/owners/' ,{
>>>>>>> 76fb07f6348568d17a1e7241fb3945a9ddddad11
            Nama : Nama,
            JenisKelamin : JenisKelamin,
            TanggalLahir : TanggalLahir,
            NoTelepon : NoTelepon,
            Email : Email
<<<<<<< HEAD
            })
.then(function(response){
console.log(response)
return response.data
}).catch(function(err){
console.log(err) 
})
},
=======
        })
        .then(function(response){
        console.log(response)
        return response.data
        }).catch(function(err){
        console.log(err)
        })
    },
>>>>>>> 76fb07f6348568d17a1e7241fb3945a9ddddad11

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