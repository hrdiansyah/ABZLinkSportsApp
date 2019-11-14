<template>
    <div class="q-pa-md">
        <div class="column" style="height: 30px"/>
        <div class="row justify-center">
            <div class="col-5">
            <q-card class="my-card newitem">
            <q-img :src="images.imgurl"/>
            </q-card>
            </div>
            <div class="col-1 q-col-gutter-xl"/>
            <div class="col-4">
                <div class="text-left text-overline">TG PROJECT</div>
                <div style="height: 10px"/>
                <div class="text-left text-h4 ">{{images.productname}}</div>
                <div style="height: 10px"/>
                <div class="text-left text-body1">Rp. {{images.harga}}</div>
                <div style="height: 30px"/>
                <q-separator color="blue-grey-3" inset />
                <div style="height: 30px"/>
                <div class="text-left text-body2">{{images.productdesc}}</div>
                <div style="height: 20px"/>

                <div style="height: 40px"/>
                
                
                <q-btn outline color="primary" label="Masukan Keranjang" class="full-width" />
                <div style="height: 20px"/>
                <q-btn style="background: #283b39; color: white" label="Beli Sekarang" 
                class="full-width" @click="show(images)"/>

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
