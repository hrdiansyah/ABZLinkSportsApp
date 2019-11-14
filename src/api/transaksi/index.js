import { getApiNoAuthLB } from "../utils"

export default {
        postTransaksi(window, Nama_product, Nama_customer, catatan,
            kuantity, diskon, kurir, total, metode_bayar, status){
            console.log(Nama_product, Nama_customer, catatan, kuantity, diskon, kurir, total, status )
        return getApiNoAuthLB()
        .post('/transaksis/' ,{
            Nama_product : Nama_product,
            Nama_customer : Nama_customer,
            catatan : catatan,
            kuantity : kuantity,
            diskon : diskon,
            kurir : kurir,
            total : total,
            metode_bayar : metode_bayar,
            status : status
        })
        .then(function(response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },
    postPayment(window, Nama_product, Nama_customer, Harga_barang, Size, Jumlah, 
        Catatan, Alamat, Kecamatan, Kota, Negara, Provinsi,
        Kodepos, Phone, Shipping, Metode_pembayaran,
        Discont, Biaya_kirim, Sub_total, Total,imgurl){
            return getApiNoAuthLB()
        .post('/payments/',{
            Nama_product : Nama_product,
            Nama_customer : Nama_customer,
            Harga_barang:Harga_barang,
            Size : Size,
            Jumlah : Jumlah,
            Catatan : Catatan,
            Alamat : Alamat,
            Kecamatan : Kecamatan,
            Kota : Kota,
            Negara:Negara,
            Provinsi :  Provinsi,
            Kodepos : Kodepos,
            Phone : Phone,
            Shipping : Shipping,
            Metode_pembayaran : Metode_pembayaran,
            Discont : Discont,
            Biaya_kirim : Biaya_kirim,
            Sub_total :  Sub_total,
            Total :  Total,
            imgurl : imgurl            
        })
        .then(function(response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },
    getpayments(window){
        return getApiNoAuthLB()
        .get('payments')
        .then(function(response){
            return response.data
        })
        .catch (function(err){
            console.log(err)
        })
    },
}