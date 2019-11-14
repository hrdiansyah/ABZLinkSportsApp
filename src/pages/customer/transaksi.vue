<template>
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
                                <q-input outlined v-model="form.Alamat" placeholder="Alamat"/>
                            </div>
                        </div>
                        <div class="row" style="height: 25px"/>

                        <div class="row">
                            <div class="col-12 q-gutter-xl">
                                <q-input outlined v-model="form.Kecamatan" placeholder="Kecamatan"/>
                            </div>
                        </div>
                        <div class="row" style="height: 25px"/>

                        <div class="row">
                            <div class="col-12 q-gutter-xl">
                                <q-input outlined v-model="form.Kota" placeholder="Kota"/>
                            </div>
                        </div>
                        <div class="row" style="height: 25px"/>

                        <div class="row">
                            <div class="col-3 q-gutter-md">
                                <q-select outlined v-model="form.Negara" :options="nega" label="Negara" placeholder="Negara"/>
                            </div>
                            <div class="col-1 q-col-gutter-sm"/>
                            
                            <div class="col-3 q-gutter-md">
                                <q-select outlined v-model="form.Provinsi" :options="prov" label="Provinsi" placeholder="Provinsi"/>
                            </div>
                            <div class="col-1 q-col-gutter-sm"/>
                            
                            <div class="col-3 q-gutter-md">
                                <q-input outlined v-model="form.Kodepos"  placeholder="Kode pos"/>
                            </div>
                        </div>
                        <div class="row" style="height: 25px"/>
                        
                        <div class="row">
                            <div class="col-12 q-gutter-xl">
                                <q-input outlined v-model="form.Tlp" placeholder="Phone"/>
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
                            <!-- <div class="col-3">
                                <q-btn style="background: #283b39; color: white" label="Confirm Shipping" size="15px" type="submit" @click="onSubmit()"  />
                            </div> -->
                            <div class="col-12 q-gutter-xl">
                                <q-input outlined v-model="form.Catatan" placeholder="Catatan"/>
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
                    <q-select borderless v-model="form.Ukuran" :options="size" label="Size"/>
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
            <div class="row" style="height: 10px"/>
            <div class="row">
                <div class="col-12 q-gutter-xl">
                    <q-select outlined v-model="form.metode_pembayaran" :options="metode" label="Payment Method"/>
                </div>
                    </div>
                <div class="row" style="height: 25px"/>

            <div class="row">
                <div class="col-8">
                    <q-input outlined v-model="form.diskon"  placeholder="Kode Diskon"/>
                </div>
                <div class="col-1 q-gutter-lg"/>
                <div class="col-1">
                
                </div>
            </div>
            <div class="column" style="height: 30px"/>
            <q-separator color="grey-5" />
            <div class="column" style="height: 30px"/>
            
            <div class="row">
                <div class="col-6">
                    <div class="text-left text-bold">Subtotal</div>
                </div>
                
                <div class="col-6">
                    <div class="text-right text-bold">Rp. {{Sub_total}}</div>
                </div>
            </div>

            <div class="column" style="height: 30px"/>
            
            <div class="row">
                <div class="col-6">
                    <div class="text-left text-bold">Discont</div>
                </div>
                
                <div class="col-6">
                    <div class="text-right text-bold">Rp. {{Discont}}</div>
                </div>
            </div>
            <div class="column" style="height: 30px"/>
            <div class="row">
                <div class="col-6">
                    <div class="text-left text-bold">Shipping</div>
                </div>
                
                <div class="col-6">
                    <div class="text-right text-bold">Rp. {{Biaya_kirim}}</div>
                </div>
            </div>

            <div class="column" style="height: 30px"/>
            <q-separator color="grey-5" />
            <div class="column" style="height: 30px"/>

             <div class="row">
                <div class="col-6">
                    <div class="text-left text-bold">Total</div>
                </div>
                
                <div class="col-6">
                    <div class="text-right text-bold">Rp. {{Total}}{{put_kuantity}}</div> 
                </div>
             </div>

             <div class="row q-mt-xl ">
                <div class="col text-center">
                    <q-btn style="background: #283b39; color: white; width:50%"  label="Confirm Shipping" size="15px" type="submit" @click="beli()"  />
                </div>
             </div>
        </div>

        </div>
        <div class="column" style="height: 100px"/>
        </div>
</template>

<script>
import containeer from '../../api/get/index';
import {downloadImage} from '../../api/upload/index';
import product from '../../api/Produk/index';
import payment from '../../api/transaksi/index';
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
                Jumlah : '',
                metode_bayar :'',
                
            }
        ],
        size:['S','M','L','XL'],
        metode:['COD (Cash On Delivery)','ATM Virtual Account','Transfer Bank','UTANG'],
        nega: ['Indonesia','Zimbabwe'],
        prov: ['Aceh', 'Bali', 'Bangka Belitung', 'Banten', 'Bengkulu','Gorontalo','Jakarta','Jambi','Jawa Barat'
        ,'Jawa Tengah','Jawa Timur','Kalimantan Timur',' Kalimantan Utara','Kepulauan Riau','Lampung','Maluku','Maluku Utara','Nusa Tenggara Barat','Nusa Tenggara Timur','Papua','Papua Barat','Riau','Sulawesi Barat','Sulewasi Selatan','Sulawesi Selatan'
        ,'Sulawesi Tengah','Sulawesi Tenggara','Sulawesi Utara','Sumatra Barat','Sumatra Selatan','Sumatra Selatan','Sumatra Utara','Yogyakarta'],
        ship:['JNE','TIKI','SICEPAT'],
        diskons:[],
        input_kurir : '',
        kd_diskon:''
    }
  },

  computed: {
    getImgs() {
      this.getImg()
    },
    Total:function() {
        return parseInt(this.Sub_total) + parseInt(this.Biaya_kirim) -  parseInt(this.Discont)
    },
    
    Sub_total:function(){
        return parseInt(this.images.harga)*this.form.Jumlah
    },
    Discont:function(){
        if(this.form.diskon=='ABZLINKS'){
           return parseInt(20000)
       } else if(this.form.diskon=='NOVEMBERCERIA'){
           return parseInt(50000)
       }
       else if(this.form.diskon=='SPORT'){
           return parseInt(25000)
       } else {
           return parseInt(0)
       }
    },
    Biaya_kirim:function(){
       if(this.form.Shipping=='JNE'){
           return parseInt(15000)
       } else if(this.form.Shipping=='TIKI'){
           return parseInt(20000)
       }
       else if(this.form.Shipping=='SICEPAT'){
           return parseInt(25000)
       } else {
           return parseInt(0)
       }
    },
    put_kuantity:function(){
        return parseInt(this.images.kuantity)-this.form.Jumlah
    }
  },

  beforeCreate() {
    let getIdcart= localStorage.getItem('id_cart');
    let self=this;
    
    cart.getCartsbyId(window, getIdcart )
        .then(function (result) {
            if(result){
                self.cart=result;
                product.getproductbyId(window, result.id_product )
                        .then(function (result) {
                            self.images= result;
                            self.put_product.product_name = result.product_name,
                            self.put_product.harga = result.harga,
                            self.put_product.product_kategory = result.product_kategori,
                            self.put_product.product_desc = result.product_desc,
                            self.put_product.imgurl = result.imgurl,
                            self.put_product.createAt = result.createAt,
                            self.put_product.id = result.id
                        })
                        .catch(function (err) {
                            console.log(err);
                        });
            }
        })
        .catch(function (err) {
            console.log(err);
        });

    diskon.getDiskon(window)
        .then(function (result) {
          return self.diskons=result;
            console,log(self.diskons)
        })
        .catch(function (err) {
            console.log(err);
        });
    
     },

     methods : {

        beli(){
            let getIdProduct= localStorage.getItem('id_product');
            let getIdCustomer= localStorage.getItem('id');
            let self=this;

            payment.postPayment(window, getIdProduct, getIdCustomer, self.images.harga, self.form.Ukuran, self.form.Jumlah, 
            self.form.Catatan, self.form.Alamat, self.form.Kecamatan, self.form.Kota, self.form.Negara, self.form.Provinsi,
            self.form.Kodepos, self.form.Tlp, self.form.Shipping,  self.form.metode_pembayaran,
            self.Discont, self.Biaya_kirim, self.Sub_total, self.Total, self.images.imgurl )
            .then(function(result)
                {
                    if(result){
                        localStorage.setItem('id_transaksi', result.id)
                        cart.deleteCart(window, self.cart.id).then(function(res)
                            {
                                localStorage.removeItem('id_cart')
                                
                                self.$router.push('/cust/detail_transaksi');
                                product.putproduct(window, self.getIdProduct, self.put_product.product_name, self.put_product.harga, 
                                        self.put_kuantity, self.put_product.product_kategory,self.put_product.product_desc, 
                                        self.put_product.imgurl, self.put_product.createAt)
                                        .then(function(result) {
                                            // self.$router.push('/cust/detail_transaksi');
                                        })
                                        .catch(function(err) {
                                            console.log(err);
                                        });

                            })
                            .catch(function(err){
                                console.log(err);
                            });
                    } else {
                        alert('Mohon Lengkapi Form');
                    }
                
                })
            .catch(function(err){
                console.log(err);
            });
        }
     }
     
}
</script>
