<template>
<<<<<<< HEAD
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
=======
    <div class="q-pa-md">
        <div class="column" style="height: 100px"/>
        <div class="row justify-center">
            <div class="col-1 q-col-gutter-xl"/>
            <div class="col-6">
                <div class="column">
                    <div class="col-1">
                        <img src="/statics/abzlogo.png" style="height: 90px; width: 110px">
                    </div>
                    <div class="col-1" style="height:20px"/>
                    <div class="col-1" style="height:40px">
                        <div class="text-left text-h6">Shipping address</div>
                    </div>
                    <div class="col">

                        <div class="row">
                            <div class="col-12 q-gutter-xl">
                                <q-input outlined v-model="Alamat" placeholder="Alamat"/>
                            </div>
                        </div>
                        <div class="row" style="height: 25px"/>

                        <div class="row">
                            <div class="col-12 q-gutter-xl">
                                <q-input outlined v-model="Kecamatan" placeholder="Kecamatan"/>
                            </div>
                        </div>
                        <div class="row" style="height: 25px"/>

                        <div class="row">
                            <div class="col-12 q-gutter-xl">
                                <q-input outlined v-model="Kota" placeholder="Kota"/>
                            </div>
                        </div>
                        <div class="row" style="height: 25px"/>

                        <div class="row">
                            <div class="col-3 q-gutter-md">
                                <q-select outlined v-model="Negara" :options="nega" label="Negara" placeholder="Negara"/>
                            </div>
                            <div class="col-1 q-col-gutter-sm"/>
                            
                            <div class="col-3 q-gutter-md">
                                <q-select outlined v-model="Provinsi" :options="prov" label="Provinsi" placeholder="Provinsi"/>
                            </div>
                            <div class="col-1 q-col-gutter-sm"/>
                            
                            <div class="col-3 q-gutter-md">
                                <q-input outlined v-model="Kodepos"  placeholder="Kode pos"/>
                            </div>
                        </div>
                        <div class="row" style="height: 25px"/>
                        
                        <div class="row">
                            <div class="col-12 q-gutter-xl">
                                <q-input outlined v-model="Tlp" placeholder="Phone"/>
                            </div>
                        </div>

                        <div class="row" style="height: 25px"/>
                        
                        <div class="row">
                            <div class="col-12 q-gutter-xl">
                                <q-select outlined v-model="form.Shipping" :options="ship" label="Shipping" placeholder="Shipping"/>
                            </div>
                        </div>
                        <div class="row" style="height: 25px"/>
                       
                        

                        <div class="row">
                            <div class="col-8 q-gutter-md"/>
                            <div class="col-1 q-gutter-xs"/>
                            <div class="col-3">
                                <q-btn style="background: #283b39; color: white" label="Confirm Shipping" size="15px" type="submit" @click="onSubmit()"  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-1 q-gutter-xl" style="width:70px">
                 <q-separator  color="blue-grey-3" vertical inset />
            </div>
            <div class="col">
            <div class="row">
                   <div class="col-2 q-gutter-lg">
                       <q-card>
                         <q-img :src="images.imgurl"/>
                       </q-card>
                    </div>
                <div class="col-1 q-gutter-lg"/>    
                <div class="col-3">
                    <div class="text-overline text-bold"> {{images.product_name}} </div>
                </div>
                <div class="col-1 q-gutter-xl"/>    
                <div class="col-2">
                    <q-select borderless v-model="form.Ukuruan" :options="size" label="Size"/>
                </div>
                <div class="col-1 q-gutter-lg"/>
                <div class="col-2">
                    <q-input borderless type="number" v-model="form.Jumlah" label="Jumlah" lazy-rules 
                    :rules="[ val => val !== null && val !== '' || 'Please Insert Jumlah']"/>
                </div>
                <div class="col-1 q-gutter-lg"/>

                <div class="col-2">
                    <div class="text-overline text-body2 text-bold">Rp. {{images.harga}}</div>
                </div>
            </div>

            <div class="column" style="height: 50px"/>
            
            <div class="column" style="height:20px"/>
            <div class="row">
                <div class="col">
                    <q-separator color="grey-5" />
                </div>
            </div>
            <div class="column" style="height: 30px"/>

            <div class="row">
                <div class="col-8">
                    <q-input outlined v-model="form.Diskon"  placeholder="Kode Diskon"/>
                </div>
                <div class="col-1 q-gutter-lg"/>
                <div class="col-1">
                
                </div>
            </div>
            <div class="column" style="height: 30px"/>
            <q-separator color="grey-5" />
            <div class="column" style="height: 30px"/>
>>>>>>> 9860c9c1abfa2bc331c8558105dcf81974ef18c3
            
            <div class="row">
                <div class="col-6">
                    <div class="text-left text-bold">Subtotal</div>
                </div>
                
                <div class="col-6">
                    <div class="text-right text-bold">Rp. {{subtotal}}</div>
                </div>
            </div>

            <div class="column" style="height: 30px"/>
            
            <div class="row">
                <div class="col-6">
                    <div class="text-left text-bold">Discont</div>
                </div>
                
                <div class="col-6">
                    <div class="text-right text-bold">Rp.{{dis}}</div>
                </div>
            </div>
            <div class="column" style="height: 30px"/>
            <div class="row">
                <div class="col-6">
                    <div class="text-left text-bold">Shipping</div>
                </div>
                
                <div class="col-6">
                    <div class="text-right text-bold">Rp.{{kurir}}</div>
                </div>
            </div>

<<<<<<< HEAD
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
           
=======
            <div class="column" style="height: 30px"/>
            <q-separator color="grey-5" />
            <div class="column" style="height: 30px"/>

             <div class="row">
                <div class="col-6">
                    <div class="text-left text-bold">Total</div>
                </div>
                
                <div class="col-6">
                    <div class="text-right text-bold">Rp. {{total}}</div> 
                </div>
             </div>
        </div>

        </div>
        <div class="column" style="height: 100px"/>
>>>>>>> 9860c9c1abfa2bc331c8558105dcf81974ef18c3
        </div>
</template>

<script>
import containeer from '../../api/get/index';
import {downloadImage} from '../../api/upload/index';
import product from '../../api/Produk/index';
import transaksi from '../../api/transaksi/index';
import kurir from '../../api/kurir/index';

import cart from '../../api/cart/index';

export default {
  data () {
    return {
        status : 'menunggu',
        images:[],
        nega: null,
        prov: null,
        ship: null,
        size: null,
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
<<<<<<< HEAD
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
=======
        size:['S','M','L','XL'],
        nega: ['Indonesia','Zimbabwe'],
        prov: ['Aceh', 'Bali', 'Bangka Belitung', 'Banten', 'Bengkulu','Gorontalo','Jakarta','Jambi','Jawa Barat'
        ,'Jawa Tengah','Jawa Timur','Kalimantan Timur',' Kalimantan Utara','Kepulauan Riau','Lampung','Maluku','Maluku Utara','Nusa Tenggara Barat','Nusa Tenggara Timur','Papua','Papua Barat','Riau','Sulawesi Barat','Sulewasi Selatan','Sulawesi Selatan'
        ,'Sulawesi Tengah','Sulawesi Tenggara','Sulawesi Utara','Sumatra Barat','Sumatra Selatan','Sumatra Selatan','Sumatra Utara','Yogyakarta'],
        ship:['JNE','TIKI','SICEPAT'],
        diskons:[],
>>>>>>> 9860c9c1abfa2bc331c8558105dcf81974ef18c3
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
