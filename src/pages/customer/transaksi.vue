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
                Status : {{status}}
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
export default {
  data () {
    return {
        status : 'menunggu',
        images:[],
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
        diskons:[],
        input_kurir : '',
        kd_diskon:''
    }
  },

  computed: {
    getImgs() {
      this.getImg()
    },
    total:function() {
        return ((parseInt(this.images.harga) * parseInt(this.form.kuantity))-parseInt(this.form.diskon))+parseInt(this.form.kurir)
    },
    diskon:function(){
        
    }
    
  },

  beforeCreate() {
    let getIdProduct= localStorage.getItem('id_product');
    let self=this;
    // get Product
    product.getproductbyId(window, getIdProduct )
        .then(function (result) {
            console.log(result);
            self.images= result;
        })
        .catch(function (err) {
            console.log(err);
        });

// diskon
    
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
            

            transaksi.postTransaksi(window, getIdProduct, getIdCustomer, self.form.catatan, 
            self.form.kuantity, self.form.diskon, self.form.kurir, self.total, self.form.metode_bayar, self.status)
            .then(function(result)
                {
                    if(result){
                        self.$router.push('/cust/detail_transaksi');
                    } else {
                        alert('Mohon Lengkapi Form');
                    }
                
                })
            .catch(function(err){
                console.log(err);
            });
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
