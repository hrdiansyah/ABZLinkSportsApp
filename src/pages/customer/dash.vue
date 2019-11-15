<template>
 <div class="q-px-none q-mt-sm " >
    <q-carousel 
      animated
      v-model="slide"
      navigation
      infinite
      autoplay
      transition-prev="slide-right"
      transition-next="slide-left"
    >
      <q-carousel-slide 
        class="responsive"
        name="first" 
        img-src="./statics/awe.jpg"
      >
        <div class="absolute-center custom-caption">
          <div class="text-center text-h1 text-white">
            First stop</div>
          <div class="text-center text-subtitle1 text-white">Animated</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide class="responsive" name="second" img-src="./statics/5980.jpg">
        <div class="absolute-center custom-caption">
          <div class="text-center text-h1 text-white">Second stop</div>
          <div class="text-center rtext-subtitle1 text-white">Famous City</div>
        </div>
      </q-carousel-slide> 
      <q-carousel-slide class="responsive" name="third" img-src="./statics/46.jpg">
        <div class="absolute-center custom-caption">
          <div class="text-center text-h1 text-white">Third stop</div>
          <div class="text-center text-subtitle1 text-white">Famous Bridge</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
      <q-card class="my-card q-my-sm">
        <q-card-section>
          <div class="text-h6">New Brand</div>
           <div class="row">
            <div id="padding" class="col-2">
              <q-img
                src="./statics/Logo_Umbro.png"
              />
            </div>
            <div id="padding" class="col-2">
              <q-img
                src="./statics/mizuno.png"
              />
            </div>
            <div id="padding" class="col-2">
              <q-img
                src="./statics/reebok.png"
              />
            </div>
            <div id="padding" class="col-2">
              <q-img
                src="./statics/UIHere (1).png"
              />
            </div>
            <div id="padding" class="col-2">
              <q-img
                src="./statics/asics.png"
              />
            </div>
            <div id="padding" class="col-2">
              <q-img
                src="./statics/underarmour.png"
              />
           </div>
          </div>
        </q-card-section>
      </q-card>
      
    <q-card class="my-card">
        <q-card-section>
          <div class="text-h6">New Products</div>
           <div class="row">
             <div class="row " >
            <div id="padding" class="col q-mx-auto  column q-ma-xs" flat v-for="item in images" :key="item.id" style="min-width:200px; max-width:250px" @click="show(item)">
                    <div class="row">
                      <div class="col">
                          <q-img style="width:200px; height:250px " class="q-mx-auto"
                          :src="item.imgurl"
                          />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <div class="align text-body2 q-mt-sm"><b> {{item.product_name}}</b></div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <div class="align text-caption"> Rp.  {{item.harga}} </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col align">
                        <q-rating
                          class=" responsive"
                          v-model="ratingModel"
                          size="1em"
                          color="indigo-10"
                          :max="5"
                          readonly
                        />
                      </div>
                    </div>
              </div>
        </div>
           </div>
          </q-card-section>
      </q-card>

      <q-card class="my-card q-my-sm">
        <q-card-section>
          <div class="text-h6">Discount</div>
           <div class="row">
              <div id="padding" class="col-2 q-gutter-y-xs column">
                <q-img
                  src="./statics/persija.jpg"
                />
                <div class="align text-body2"><b> ABZLINKS </b></div>
                <div class="align text-caption"> Rp. 20.000,00 </div>
                
              </div>
            <div id="padding" class="col-2 q-gutter-y-xs column">
              <q-img
                src="./statics/indonesia.jpg"
              />
                <div class="align text-body2"><b> NOVEMBERCERIA </b></div>
                <div class="align text-caption"> Rp. 50.000,00 </div>
            </div>
            <div id="padding" class="col-2 q-gutter-y-xs column">
              <q-img
                src="./statics/brazil.jpg"
              />
              <div class="align text-body2"><b> ORDER NOW </b></div>
                <div class="align text-caption"> Rp. 30.000,00 </div>
            </div>
            <div id="padding" class="col-2 q-gutter-y-xs column">
              <q-img
                src="./statics/inter.jpg"
              />
              <div class="align text-body2"><b> ORDER </b></div>
                <div class="align text-caption"> Rp. 10.000,00 </div>
            </div>
            <div id="padding" class="col-2 q-gutter-y-xs column">
              <q-img
                src="./statics/madrid.jpg"
              />
              <div class="align text-body2"><b> NEW MEMBER </b></div>
                <div class="align text-caption"> Rp. 30.000,00 </div>
                
            </div>
            <div id="padding" class="col-2 q-gutter-y-xs column">
              <q-img
                src="./statics/barcelona.jpg"
              />
              <div class="align text-body2"><b> MEMBER </b></div>
                <div class="align text-caption"> Rp. 10.000,00 </div>
                </div>
              </div>
          </q-card-section>
      </q-card>
    </div>
  </template>



<<style scoped>
  .size {
    height:20px;
    width: 60px;
  }
  .trans {
    opacity : 0.5;
  }
  #padding {
    padding:10px;
  }
  
  .align {
    text-align: center;
  }
</style>
<script>
import containeer from '../../api/get/index';
import {downloadImage} from '../../api/upload/index';
import product from '../../api/Produk/index';

export default {
  data () {
    return {
      slide: 1,
      images:[]
    }
  },
  beforeCreate() {
       let self=this;
          product.getproduct(window )
                .then(function (result) {
                    console.log(result);
                    self.images= result;
                })
                .catch(function (err) {
                    console.log(err);
                });
     },
  methods :{
    show(item){
       localStorage.setItem('id_product', item.id)
       localStorage.setItem('imgurl',item.imgurl)
       this.$router.push('/cust/detail')
      },
      logout(){
        localStorage.removeItem('role');
        localStorage.removeItem('email');
        localStorage.removeItem('imgurl');
        localStorage.removeItem('id_cart');
        localStorage.removeItem('id');
        localStorage.removeItem('id_product');
        localStorage.removeItem('id_transaksi');
        this.$router.push('/login');
      }
    }
}
</script>