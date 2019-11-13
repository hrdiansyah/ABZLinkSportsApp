<template>
 <div class="q-pa-md q-gutter-md">
   <div>
    <input type="text" v-model="find_name">
    <q-btn color="blue" icon="search" label="search" class="sp" size="sm" @click="findByName()" />
   </div>
  
    <q-layout class="shadow-2 rounded-borders"> 
     
       <q-header class="bg-grey-3 text-grey-9" reveal height-hint="60">
        <q-toolbar class="GPLAY__toolbar text-grey-6">
        <div class="q-pr-lg" v-if="$q.screen.gt.xs" >
          <img src="/statics/logo.png" style="height: 60px">
        </div>

        <q-space />

        <div class="GPLAY__toolbar-input-container row no-wrap" >
          <q-input dense outlined square v-model="search" placeholder="Search" class="bg-white col float-right" />
          <q-btn class="GPLAY__toolbar-input-btn" color="primary" icon="search" unelevated />
        </div>

        <q-space />

        <div>
          <q-btn class="q-ml-sm" outline color="light-blue-13" label="Login" size="md" to="/login"/>
          <q-btn  class="q-ml-sm" color="light-blue-13" label="Daftar" size="md"/>
        </div>
      </q-toolbar>
    </q-header>
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
        class="responsive trans"
        name="first" 
        img-src="./statics/5980.jpg"
      >
        <div class="absolute-center custom-caption">
          <div class="text-center text-h1 text-white">
            <br>First stop
            </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide class="responsive" name="second" img-src="./statics/awe.jpg">
        <div class="absolute-center custom-caption">
          <div class="text-center text-h1 text-white">Second stop</div>
          <div class="text-center rtext-subtitle1 text-white"> Famous City </div>
        </div>
      </q-carousel-slide> 
      <q-carousel-slide class="responsive" name="third" img-src="./statics/46.jpg">
        <div class="absolute-center custom-caption">
          <div class="text-center text-h1 text-white">Third stop</div>
          <div class="text-center text-subtitle1 text-white">Famous Bridge</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
      <q-card class="my-card">
        <q-card-section>
          <div class="text-h6">New Brand</div>
           <div class="row">
            <div id="padding" class="col-2 q-mx-sm q-mx-auto q-mt-sm" style="min-width:150px; max-width:200px">
              <q-img
                src="./statics/Logo_Umbro.png"
              />
            </div>
            <div id="padding" class="col-2 q-mx-sm q-mx-auto q-mt-sm" style="min-width:150px; max-width:200px">
              <q-img
                src="./statics/mizuno.png"
              />
            </div>
            <div id="padding" class="col-2 q-mx-sm q-mx-auto q-mt-sm" style="min-width:150px; max-width:200px">
              <q-img
                src="./statics/reebok.png"
              />
            </div>
            <div id="padding" class="col-2 q-mx-auto q-mx-sm q-mt-sm" style="min-width:150px; max-width:200px">
              <q-img
                src="./statics/UIHere (1).png"
              />
            </div>
            <div id="padding" class="col-2 q-mx-sm q-mx-auto q-mt-sm" style="min-width:150px; max-width:200px">
              <q-img
                src="./statics/asics.png"
              />
            </div>
            <div id="padding" class="col-2 q-mx-sm q-mx-auto q-mt-sm" style="min-width:150px; max-width:200px">
              <q-img
                src="./statics/underarmour.png"
              />
           </div>
          </div>
        </q-card-section>
      </q-card>
    <q-card class="my-card">
        <q-card-section >
          <div class="text-h6">New Products</div>
           <div class="row " >
                
              <q-btn id="padding" class="col q-mx-auto  column q-ma-xs" flat v-for="item in images" :key="item.id" style="min-width:200px; max-width:250px" @click="show(item)">
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
                      <div class="col ">
                        <q-rating
                          class="q-mx-auto responsive"
                          v-model="ratingModel"
                          size="1em"
                          color="indigo-10"
                          :max="5"
                          readonly
                        />
                      </div>
                    </div>
              </q-btn>
           </div>
          </q-card-section>
      </q-card>
           <div class="row">
              <div id="padding" class="col-6 q-gutter-y-xs column">
                <q-img
                  src="./statics/supersale2.jpg"
                />  
              </div>
              <div id="padding" class="col-6 q-gutter-y-xs column">
                <q-img
                  src="./statics/shoesale.jpg"
                />
              </div>
            </div>
             <div class="row">
              <div id="padding" class="col-12 q-gutter-y-xs column">
                <q-img
                  src="./statics/shoesbanner1.jpg"
                />  
              </div>
             </div>
            </q-layout>
            <!-- Awal Footer -->
             <q-card class="my-card bg-grey-10">
              <q-card-section>
                <div class="row q-ma-md text-white"  >
                  <div class="col " style="max-width:30%">
                    <h6 class="q-ma-none q-mb-sm">Service</h6>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been  
                  </div>

                  <div class="col bg-white q-ma-sm" style="max-width:1px ">
                  </div>

                  <div class="col " style="max-width:30%">
                      <div class="q-mx-sm">
                          <h6 class="q-ma-none ">Categories</h6>
                          <p class="q-ma-none">Product <br>About Us <br>Testimoni <br>Price Tables <br> Crew <br> Portofolio
                          </p>
                      </div>
                  </div>

                  <div class="col " style="max-width:30%">
                      <h6 class="q-my-none q-mb-sm q-ml-lg" >Partner</h6>
                      <div class="q-ml-lg">
                      Product <br>About Us <br>Testimoni <br>Price Tables <br> Crew <br> Portofolio
                      </div>
                  </div>

                  <div class="col bg-white q-ma-sm" style="max-width:1px ">
                  </div>

                  <div class="col flex flex-center " >
                    Logout
                  </div>
                </div>
              </q-card-section> 
            </q-card >
            <!-- Akhir Footer -->
        </div>
</template>


<style lang="sass">
.GPLAY
  &__toolbar
    height: 60px
  &__logo
    width: 183px
    height: 39px
  &__toolbar-input-container
    min-width: 100px
    width: 55%
  &__toolbar-input-btn
    border-radius: 0
    max-width: 60px
    width: 100%
  &__drawer-link
    .q-item__section--avatar
      margin: -8px 0 -8px -16px
      padding: 8px 0 8px 16px
    .q-item__section--main
      margin: -8px -16px -8px 16px
      padding: 8px 16px 8px 2px
      font-size: 18px
      font-weight: 300
    &--apps, &--movies, &--music, &--books, &--devices
      background: #f5f5f5!important
      &:hover
        color: #eee !important
    &--apps:hover
      background: #43a047!important
    &--movies:hover
      background: #e53935!important
    &--music:hover
      background: #fb8c00!important
    &--books:hover
      background: #1e88e5!important
    &--devices:hover
      background: #546e7a!important
  &__drawer-item
    padding: 6px 12px 6px 23px
  &__sticky
    min-height: 49px
    border-bottom: 1px solid rgba(0,0,0,0.12)
  &__sticky-help
    border: 1px solid #ccc
    padding-left: 8px
    padding-right: 8px
  &__sticky-settings
    padding-left: 17px
    padding-right: 17px
    border: 1px solid #ccc
</style>

<script>
import containeer from '../../api/get/index';
import {downloadImage} from '../../api/upload/index';
import product from '../../api/Produk/index'
export default {
  data () {
    return {
      slide: 'first',
      ratingModel: 5,
      ratingModel1: 4,
      images:[],
      img: './statics/supersale2.jpg',
      kuantity:'',
      find_name:''
      }
  },

  computed: {
    getImg() {
      this.getImg()
    },
    cek(){
      if(this.images.kuantity<1){
        return this.kuantity='Stok habis';
      }
    }
  },

  beforeCreate() {
         let self=this;
    product.getproduct(window )
                .then(function (result) {
                    console.log(result);
                    for (let i = 0; i < 3; i++) {
                      self.images.push(result[i])
                    }
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
      findByName(find_name) {
          console.log(this.find_name)
            try {
                const self = this
                product.getProductByName(window, self.find_name )
                .then(function (result){
                return  self.images=result.data
            })
            } catch (error) {
                console.log(error.message);
            }
        }
     },
     
}
</script>