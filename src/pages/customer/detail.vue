<template>
<div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card q-mx-auto text-white" style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)">
        <q-card-section>
            <template>
                <div class="q-pa-md" style="max-width: 700px">
                    <label ><H4 class="text-center q-mt-none q-mb-md"> <q-icon  name="record_voice_over" class="q-mr-md"/> Product Detail</H4></label>
                    <hr >
                   <div class="row">
                       <div class="col q-ma-xs" style="width: 900px">
                            <q-card class="my-card" >
                                <q-card-section >
                                    <q-img style="width:200px; height:250px " class="q-mx-auto"
                                    :src="images.imgurl"
                                    />
                                     
                                    <!-- awal gambar kecil -->
                                    <div class="row">
                                        
                                        <div class="col q-ma-xs">
                                            <q-img
                                            src="./statics/11.jpg"
                                            style="width: 100%"
                                            />
                                            
                                        </div>
                                        <div class="col q-ma-xs">
                                            <q-img
                                            src="./statics/11.jpg"
                                            style="width: 100%"
                                            />
                                        </div>
                                        <div class="col q-ma-xs">
                                            <q-img
                                            src="./statics/11.jpg"
                                            style="width: 100%"
                                            />
                                        </div>
                                    </div>
                                    <!-- awal gambar kecil -->

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
                                            <q-btn class="float-right q-mx-md" color="red" @click="add()">Order</q-btn>
                                        </div>
                                        <div class="col q-ma-xs text-black " >
                                            <q-btn color="red" class="q-mx-md">Batal</q-btn>
                                        </div>
                                    </div>
                                    <!-- akhir tombol -->
                                </q-card-section>
                            </q-card>
                       </div>

                       <div class="col q-ma-xs">
                          <q-card class="my-card">
                                <q-card-section class="text-red">
                                    <Label ><u><b>Descripsi</b></u></Label><br>
                                    {{images.product_desc}}
                                </q-card-section>
                            </q-card>
                       </div>
                   </div>

                   <!-- awal ulasan -->
                   <div class="row q-mx-xs q-mt-sm">
                       <div class="col text-black">
                           <q-card class="my-card text-center">
                                <q-card-section class="text-black">
                                <label >Ulasan</label>
                                <hr>
                                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </q-card-section>
                            </q-card>
                       </div>
                   </div>
                   <!-- akhir ulasan -->
                </div>
            </template>
        </q-card-section>
    </q-card>
</div>
</template>

<script>
import containeer from '../../api/get/index';
import {downloadImage} from '../../api/upload/index';
import product from '../../api/Produk/index';
import cart from '../../api/cart/index';
export default {
  data () {
    return {
      images:[],
      img: './statics/supersale2.jpg'
      }
  },

  computed: {
    getImgs() {
      this.getImg()
    }
  },

  beforeCreate() {
        let getId= localStorage.getItem('id_product');
        console.log(getId)
         let self=this;
    product.getproductbyId(window, getId )
                .then(function (result) {
                    console.log(result);
                    self.images= result;
                })
                .catch(function (err) {
                    console.log(err);
                });
     },

    methods : {

       add(){
            let getIdProduct= localStorage.getItem('id_product');
            let getIdCustomer= localStorage.getItem('id');
            let getimgurl =localStorage.getItem('imgurl')
            let self=this;
            

            cart.postCart(window, getIdProduct, getIdCustomer,getimgurl)
            .then(function(result)
                {
                    if(result){
                        localStorage.setItem("id_cart", result.id)
                        self.$router.push('/cust/transaksi');
                        console.log(result.id);
                    } 
                })
            .catch(function(err){
                console.log(err);
            });
        }
     }
     
}
</script>
