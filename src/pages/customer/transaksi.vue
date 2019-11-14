<template>
<div class="q-pa-mditems-start q-gutter-md">
    <div class="row">
        <div class="col bg-red">
            Transaksi 
        </div>
    </div>
    <div class="row">
        <div class="col bg-red">
            <q-card class="my-card" >
                <q-card-section >
                    <div class="row">
                        <div class="col">
                            <q-img style="width:200px; height:250px " class="q-mx-auto"
                            :src="images.imgurl"
                            />
                        </div>
                        <div class="col">
                            <label ><b class="text-center"> {{images.product_desc}}</b></label><br>
                            <label> {{images.product_kategory}}</label>
                        </div>
                    </div>
                    
                        
                    <!-- awal desc harga -->
                    <div class="row">
                        <div class="col q-ma-xs text-black ">
                            <hr>
                            <label ><b class="text-center"> {{images.product_name}}</b></label><br>
                            <label> Rp. {{images.harga}}</label>
                            
                        </div>
                    </div>
                    <!-- akhir desc harga -->

                    <!-- awal tombol -->
                    <div class="row">
                        <div class="col q-ma-xs text-black  ">
                            <q-btn class="float-right q-mx-md" color="red" @click="beli()">Order Now</q-btn>
                        </div>
                        <div class="col q-ma-xs text-black " >
                            <q-btn color="red" class="q-mx-md">Batal</q-btn>
                        </div>
                    </div>
                    <!-- akhir tombol -->
                </q-card-section>
            </q-card>
        </div>
        <div class="col bg-blue">
            <!-- <form @submit="beli()"> -->
            
            <div class="q-my-xs">
                Catatan : <input type="text"  v-model="form.catatan"><br>
            </div>

            <div class="q-my-xs">
                Kuantity : <input type="text"  v-model="form.kuantity"><br>
            </div>

           <div class="q-my-xs">
               Diskon : <input type="text"  v-model="form.diskon">
           </div>
             
           <div class="q-my-xs">
               Kurir : <input type="text"  v-model="form.kurir"><input><br>
           </div>
           <div class="q-my-xs">
               total : {{total}}
           </div>
           <div class="q-my-xs">
               Methode Pembayaran : <input type="text"  v-model="form.metode_bayar"><br>
                Status : {{status}} <br>
                total : {{images.kuantity}}
                sisa : {{put_kuantity}}
           </div>

           <!-- <q-btn class="float-right q-mx-md" color="red" type="submit" >Order Now</q-btn> -->
            <!-- </form> -->
           
        </div>
    </div>
</div>
</template>

<script>
import containeer from '../../api/get/index';
import {downloadImage} from '../../api/upload/index';
import product from '../../api/Produk/index';
import transaksi from '../../api/transaksi/index';
import kurir from '../../api/kurir/index';
import diskon from '../../api/diskon/index';
import cart from '../../api/cart/index';
export default {
  data () {
    return {
        status : 'menunggu',
        images:[],
        cart :[],
        img: './statics/supersale2.jpg',
        form: [
            {
                id_product:'',
                id_Customer : '',
                catatan : '',
                kuantity : 0,
                diskon : 0,
                kurir : 0,
                metode_bayar :'',
                
            }
        ],
        put_product:[{
            product_name: '',
            harga : '',
            product_kategory : '',
            product_desc : '',
            berat : '',
            imgurl : '',
            createAt : '',
            id : ''
        }],
        diskons:0,
        input_kurir : '',
        kd_diskon:'',
        
    }
  },

  computed: {
    getImgs() {
      this.getImg()
    },
    total:function() {
        if(this.form.diskon=='baru'){
            if(this.form.kurir=='JNE'){
                return ((parseInt(this.images.harga) * parseInt(this.form.kuantity))-parseInt(10000))+parseInt(15000)
            } else if(this.form.kurir=='JNT'){
                return ((parseInt(this.images.harga) * parseInt(this.form.kuantity))-parseInt(10000))+parseInt(20000)
            } else if(this.form.kurir=='GRAB'){
                return ((parseInt(this.images.harga) * parseInt(this.form.kuantity))-parseInt(10000))+parseInt(30000)
            }
             
        }else if(this.form.diskon=='pertama'){
            if(this.form.kurir=='JNE'){
                return ((parseInt(this.images.harga) * parseInt(this.form.kuantity))-parseInt(20000))+parseInt(15000)
            } else if(this.form.kurir=='JNT'){
                return ((parseInt(this.images.harga) * parseInt(this.form.kuantity))-parseInt(20000))+parseInt(20000)
            } else if(this.form.kurir=='GRAB'){
                return ((parseInt(this.images.harga) * parseInt(this.form.kuantity))-parseInt(20000))+parseInt(30000)
            }
        }
    },
    put_kuantity:function(){
        return parseInt(this.images.kuantity)-(this.form.kuantity)
    }
    
  },

  beforeCreate() {
    let getIdcart= localStorage.getItem('id_cart');
    // let getIdproducts= localStorage.getItem('id_products');
    let self=this;
    
    cart.getCartsbyId(window, getIdcart )
        .then(function (result) {
            if(result){
                // localStorage.setItem('id_products', result.id_product)
                self.cart=result;
                product.getproductbyId(window, result.id_product )
                        .then(function (result) {
                            self.images= result;
                            self.put_product.product_name = result.product_name,
                            self.put_product.harga = result.harga,
                            self.put_product.product_kategory = result.product_kategory,
                            self.put_product.product_desc = result.product_desc,
                            self.put_product.berat = result.berat,
                            self.put_product.imgurl = result.imgurl,
                            self.put_product.createAt = result.createAt,
                            self.put_product.id = result.id

                            diskon.getDiskon(window)
                                    .then(function (result) {
                                    return self.diskons=result;
                                        console,log('diskon ret', result)
                                    })
                                    .catch(function (err) {
                                        console.log(err);
                                    });
                        })
                        .catch(function (err) {
                            console.log(err);
                        });
            }
        })
        .catch(function (err) {
            console.log(err);
        });

// diskon
    
    // diskon.getDiskon(window)
    //     .then(function (result) {
    //       return self.diskons=result;
    //         console,log('diskon ret', result)
    //     })
    //     .catch(function (err) {
    //         console.log(err);
    //     });
    
     },

     methods : {

        beli(){
            let getIdProduct= localStorage.getItem('id_product');
            let getIdCustomer= localStorage.getItem('id');
            let self=this;

            // self.put_product.product_name = self.images.product_name,
            // self.put_product.harga = self.images.harga,
            // self.put_product.kuantity = 0,
            // self.put_product.product_kategory = self.images.product_kategory,
            // self.put_product.product_desc = self.images.product_desc,
            // self.put_product.berat = self.images.berat,
            // self.put_product.imgurl = self.images.imgurl,
            // self.put_product.createAt = self.images.createAt,
            // self.put_product.id = self.images.id

            transaksi.postTransaksi(window, getIdProduct, getIdCustomer, self.form.catatan, 
            self.form.kuantity, self.form.diskon, self.form.kurir, self.total, self.form.metode_bayar, self.status)
            .then(function(result)
                {
                    if(result){
                        cart.deleteCart(window, self.cart.id).then(function(res)
                            {
                                localStorage.removeItem('id_cart')
                                self.$router.push('/cust/detail_transaksi');
                            })
                            .catch(function(err){
                                console.log(err);
                            });
                            console.log(self.put_kuantity)

                        product.putproduct(window, self.put_product.id, self.put_product.product_name, self.put_product.harga, 
                        self.put_kuantity, self.put_product.product_kategory,self.put_product.product_desc,self.put_product.berat, 
                        self.put_product.imgurl, self.put_product.createAt, self.put_product.id)
                            .then(function(result) {
                                self.$router.go('/admin/barang')
                            })
                            .catch(function(err) {
                                console.log(err);
                            });

                    } else {
                        alert('Mohon Lengkapi Form');
                    }
                
                })
            .catch(function(err){
                console.log(err);
            });

            // cart.deleteCart(window, self.cart.id).then(function(res)
            //     {
            //         localStorage.removeItem('id_cart')
            //         self.$router.push('/cust/detail_transaksi');
            //     })
            // .catch(function(err){
            //     console.log(err);
            // });
        },
        cekDiskon(){
            
            if(this.kd_diskon=this.diskons.diskon){
                return this.form.diskon = this.diskons.nilai;
                console.log(this.diskons.diskon);
            }
        }
     }
     
}
</script>
