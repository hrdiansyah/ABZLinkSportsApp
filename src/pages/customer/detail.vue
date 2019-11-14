<template>
    <div class="q-pa-md">
        <div class="column" style="height: 30px"/>
        <div class="row justify-center">
            <div class="col-6">
            <q-card class="my-card newitem">
            <q-img :src="images.imgurl"/>
            </q-card>
            </div>
            <div class="col-1 q-col-gutter-xl"/>
            <div class="col-4">
                <div class="text-left text-overline">ABZLinkSports</div>
                <div style="height: 10px"/>
                <div class="text-left text-h3 ">{{images.product_name}}</div>
                <div style="height: 10px"/>
                <div class="row">
                      <div class="col">
                          <div class="row "> 
                              <div class="col" style="max-width:170px">
                                    <div class="text-blue-14 text-body1"> 5.0  
                                    <q-rating
                                    class="q-mx-auto responsive"
                                    v-model="ratingModel"
                                    size="1.5em"
                                    color="indigo-10"
                                    :max="5"
                                    readonly
                                    />
                                    </div>
                                </div>
                                
                                <div class="col q-ma-none bg-black" style="max-width:1px">
                                   <q-separator vertical style="max-height: 5px" />
                                   
                                </div>
                                <div class="col text-subtitle1 q-ml-md" style="max-width:125px">
                                  <a><u> 306 </u></a>
                                  Penilaian
                                </div>
                                 <div class="col q-ma-none bg-black" style="max-width:1px">
                                   <q-separator vertical style="max-height: 5px" />
                                </div>
                                <div class="col text-subtitle1 q-ml-md" >
                                  <a><u> 20 </u></a>
                                  Terjual
                                </div>
                            </div> 
                        <div style="height: 10px"/>
                         <div class="col-4 ">
                        </div>
                  </div>
                   
                </div>
                <br>
                <br>
                <q-card class="my-card">
                <q-card-section class="bg-grey-3">
                    <div class="text-left text-blue-14 text-h4">Rp. {{images.harga}}</div>
                </q-card-section>
                </q-card>
                <div style="height: 30px"/>
                <q-separator color="blue-grey-3" inset />
                <div style="height: 30px"/>
                <b text-subtitle1> Product Description : </b>
                <div style="height: 30px"/>
                <div class="text-left text-body2">{{images.product_desc}}</div>
                <div style="height: 20px"/>

                <div style="height: 40px"/>
                <div class="row">
                    <div class="col q-mr-sm">
                        <q-btn style="background: #283b39; color: white" label="Beli Sekarang" 
                        class="full-width q-mb-sm" @click="add()"/>
                    </div>
                    <div class="col">
                        <q-btn outline color="primary" label="Masukakan Keranjang" class="full-width" @click="dialog=true" />
                        <div style="height: 20px" />
   
                    </div>
                </div>
                 <q-dialog
                    v-model="dialog">
                    <q-card style="width: 700px; max-width: 80vw;">
                        <q-card-section>
                        <div class="text-h6">Selamat, barang anda telah masuk ke keranjang</div>
                        </q-card-section>

                        <q-card-section>
                            Apakah ingin melanjutkan berbelanja?
                        </q-card-section>

                        <q-card-actions align="right" class="bg-white text-teal">
                            <q-btn flat label="Lanjut Berbelanja" to="/cust/catalog" />
                            <q-btn flat label="TIDAK" v-close-popup />
                        </q-card-actions>
                    </q-card>
                </q-dialog>
            </div> 
        </div>
        <div class="column" style="height: 50px"/>
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
      img: './statics/supersale2.jpg',
      ratingModel: 5,
      dialog: false
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
        },
        // dialog(){
        //     let getIdProduct= localStorage.getItem('id_product');
        //     let getIdCustomer= localStorage.getItem('id');
        //     let getimgurl =localStorage.getItem('imgurl')
        //     let self=this;
        //     cart.postCart(window, getIdProduct, getIdCustomer,getimgurl)
        //     .then(function(result)
        //         {
        //             if(result){
        //                 localStorage.setItem("id_cart", result.id)
        //                 this.dialog=true
        //             } 
        //         })
        //     .catch(function(err){
        //         console.log(err);
        //     });
        // }
     }
     
}
</script>
