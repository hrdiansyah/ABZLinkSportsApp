<template>
 <div class="q-pa-md">
     <q-toolbar class="bg-grey-10 text-white shadow-2 ">
      <q-btn flat label="Homepage" />
      <q-space />

      <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
      <q-tabs v-model="tab" shrink>
        <q-tab name="Product" label="Product" />
        <q-tab name="How" label="How To Use" />
        <q-tab name="Pricing" label="Pricing" />
      </q-tabs>
    </q-toolbar>



      <q-toolbar class="bg-grey-10 text-white shadow-2 ">
      <q-tabs v-model="tab" shrink>
        <q-tab name="tab1" label="About" />
        <q-tab name="tab2" label="News" />
        <q-tab name="tab3" label="Men" />
        <q-tab name="tab4" label="Woman" />
        <q-tab name="tab4" label="Contact Us" />
      </q-tabs>
      <q-space />
      
      <q-input
        v-model="search"
        debounce="500"
        filled
        placeholder="Search"

      >
      <template v-slot:append>
          <q-icon name="search" />
        </template>
        
      </q-input>
      <div class=" q-gutter-md bg-grey-10 text-white shadow-2 " style="font-size: 4em">
      
      <q-btn round color="primary" icon="shopping_cart" />
      </div>
      
      <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
      <q-tabs v-model="tab" shrink>
         <q-tab name="./statics/toolbar/gerigi.jpg" label="" />
        <div class="q-pa-md q-gutter-sm">
        <q-btn label="Alert" color="primary" @click="alert" />
        <q-btn label="Confirm" color="primary" @click="confirm" />
        <q-btn label="Prompt" color="primary" @click="prompt" />
        </div>
        <q-tab name="tab2" label="Tab 2" />
        <q-tab name="tab3" label="Tab 3" />
      </q-tabs>
    </q-toolbar>
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
        img-src="./statics/baju/madrid.jpg"
      >
        <div class="absolute-center custom-caption">
          <div class="text-center text-h1 text-white">
            First </div>
          <div class="text-center text-subtitle1 text-white">Animated</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide class="responsive" name="second" img-src="./statics/baju/juve2.jpg">
        <div class="absolute-center custom-caption">
          <div class="text-center text-h1 text-white">Famous</div>
          <div class="text-center rtext-subtitle1 text-white">Famous City</div>
        </div>
      </q-carousel-slide> 
      <q-carousel-slide class="responsive" name="third" img-src="./statics/baju/arsenal.jpg">
        <div class="absolute-center custom-caption">
          <div class="text-center text-h1 text-white">Central</div>
          <div class="text-center text-subtitle1 text-white">Famous Bridge</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
      <q-card class="my-card">
        <q-card-section>
          <div class="text-h6 text-center">New Brand</div>
           <div class="row">
            <div id="padding" class="col-3">
              <q-img
                src="./statics/puma.png"
              />
            </div>
            <div id="padding" class="col-3">
              <q-img
                src="./statics/adidas3.png"
              />
            </div>
            <div id="padding" class="col-3">
              <q-img
                src="./statics/nike3.png"
              />
            </div>
            <div id="padding" class="col-3">
              <q-img
                src="./statics/nb2.jpg"
              />
            </div>
            
          </div>
        </q-card-section>
      </q-card>
      

    
    <q-card class="my-card">
        <q-card-section>
          <div class="text-h6">New Products</div>
           <div class="row">
              <div id="padding" class="col-2 q-gutter-y-xs column">
                <q-img
                  src="./statics/baju/madrid.jpg"
                />
                <div class="align text-body2"><b> Jersey Real Madrid </b></div>
                <div class="align text-caption"> Rp. 450.000,00 </div>
                <q-rating
                  class="q-mx-auto responsive"
                  v-model="ratingModel"
                  size="1.5em"
                  color="indigo-10"
                  :max="5"
                  readonly
                />
              </div>
            <div id="padding" class="col-2 q-gutter-y-xs column">
              <q-img
                src="./statics/baju/juve2.jpg"
              />
                <div class="align text-body2"><b> Jersey Juventus </b></div>
                <div class="align text-caption"> Rp. 350.000,00 </div>
                <q-rating
                  class="q-mx-auto responsive"
                  v-model="ratingModel1"
                  size="1.5em"
                  color="indigo-10"
                  :max="5"
                  readonly
                />
            </div>
            <div id="padding" class="col-2 q-gutter-y-xs column">
              <q-img  @click="beli()"
                src="./statics/baju/city.jpg"
              />
              <div class="align text-body2"><b> Jersey Manchester City </b></div>
                <div class="align text-caption"> Rp. 260.000,00 </div>
                <q-rating
                  class="q-mx-auto responsive"
                  v-model="ratingModel1"
                  size="1.5em"
                  color="indigo-10"
                  :max="5"
                  readonly
                />
            </div>
            
            <div id="padding" class="col-2 q-gutter-y-xs column">
              <q-img
                src="./statics/baju/mcu.jpg" @click="beli()"
              />
              <div class="align text-body2"><b> Jersey Manchester United </b></div>
                <div class="align text-caption"> Rp. 290.000,00 </div>
                <q-rating
                  class="q-mx-auto responsive"
                  v-model="ratingModel"
                  size="1.5em"
                  color="indigo-10"
                  :max="5"
                  readonly
                />
            </div>
            <div id="padding" class="col-2 q-gutter-y-xs column">
              <q-img
                src="./statics/baju/liv.jpg" @click="beli()"
              />
              <div class="align text-body2"><b> Jersey Liverpool </b></div>
                <div class="align text-caption"> Rp. 290.000,00 </div>
                <q-rating
                  class="q-mx-auto responsive"
                  v-model="ratingModel"
                  size="1.5em"
                  color="indigo-10"
                  :max="5"
                  readonly
                />
            </div>
            <div id="padding" class="col-2 q-gutter-y-xs column">
              <q-img
                src="./statics/baju/tot.jpg"
              />
              <div class="align text-body2"><b> Jersey Tottenham </b></div>
                <div class="align text-caption"> Rp. 250.000,00 </div>
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
          </q-card-section>
      </q-card>


      <q-card class="my-card">
        <q-card-section>
           <div class="row">
              <div id="padding" class="col-2 q-gutter-y-xs column">
                <q-img
                  src="./statics/sepatu/adidas1.jpg"
                />
                <div class="align text-body2"><b> Sepatu Adidas Classic Lake </b></div>
                <div class="align text-caption"> Rp. 2.450.000,00 </div>
                <q-rating
                  class="q-mx-auto responsive"
                  v-model="ratingModel"
                  size="1.5em"
                  color="indigo-10"
                  :max="5"
                  readonly
                />
              </div>
            <div id="padding" class="col-2 q-gutter-y-xs column">
              <q-img
                src="./statics/sepatu/nb2.jpg" @click="beli()"
              />
                <div class="align text-body2"><b> Sepatu NewBalance Blue White </b></div>
                <div class="align text-caption"> Rp. 1.650.000,00 </div>
                <q-rating
                  class="q-mx-auto responsive"
                  v-model="ratingModel1"
                  size="1.5em"
                  color="indigo-10"
                  :max="5"
                  readonly
                />
            </div>
            <div id="padding" class="col-2 q-gutter-y-xs column">
              <q-img
                src="./statics/sepatu/nike2.jpg" @click="beli()"
              />
              <div class="align text-body2"><b> Sepatu Nike Vapor</b></div>
                <div class="align text-caption"> Rp. 2.850.000,00 </div>
                <q-rating
                  class="q-mx-auto responsive"
                  v-model="ratingModel1"
                  size="1.5em"
                  color="indigo-10"
                  :max="5"
                  readonly
                />
            </div>
            <div id="padding" class="col-2 q-gutter-y-xs column">
              <q-img
                src="./statics/sepatu/puma.jpg"
              />
              <div class="align text-body2"><b> Sepatu Puma Evo Speed</b></div>
                <div class="align text-caption"> Rp. 2.290.000,00 </div>
                <q-rating
                  class="q-mx-auto responsive"
                  v-model="ratingModel"
                  size="1.5em"
                  color="indigo-10"
                  :max="5"
                  readonly
                />
            </div>
            <div id="padding" class="col-2 q-gutter-y-xs column">
              <q-img
                src="./statics/sepatu/puma2.jpg"
              />
              <div class="align text-body2"><b> Sepatu Puma EvoPower </b></div>
                <div class="align text-caption"> Rp. 2.500.000,00 </div>
                <q-rating
                  class="q-mx-auto responsive"
                  v-model="ratingModel"
                  size="1.5em"
                  color="indigo-10"
                  :max="5"
                  readonly
                />
            </div>
            <div id="padding" class="col-2 q-gutter-y-xs column">
              <q-img
                src="./statics/sepatu/adidas4.jpg"
              />
              <div class="align text-body2"><b> Sepatu Adidas Nemesis </b></div>
                <div class="align text-caption"> Rp. 2.900.000,00 </div>
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
          </q-card-section>
      </q-card>


               
      
        <q-card class="my-card">
        <q-card-section>
          <div class="text-h6">Discount</div>
           <div class="row">
              <div id="padding" class="col-2 q-gutter-y-xs column">
                <q-img
                  src="./statics/baju/ac2.jpg"
                />
                <div class="align text-body2"><b> Jersey Ac Milan </b></div>
                <div class="align text-caption"> Rp. 190.000,00 </div>
                <q-rating
                  class="q-mx-auto responsive"
                  v-model="ratingModel"
                  size="1.5em"
                  color="indigo-10"
                  :max="5"
                  readonly
                />
              </div>
            <div id="padding" class="col-2 q-gutter-y-xs column">
              <q-img
                src="./statics/baju/barca.jpg"
              />
                <div class="align text-body2"><b> Jersey Barcelona </b></div>
                <div class="align text-caption"> Rp. 120.000,00 </div>
                <q-rating
                  class="q-mx-auto responsive"
                  v-model="ratingModel1"
                  size="1.5em"
                  color="indigo-10"
                  :max="5"
                  readonly
                />
            </div>
            <div id="padding" class="col-2 q-gutter-y-xs column">
              <q-img
                src="./statics/baju/porto.jpg"
              />
              <div class="align text-body2"><b> Jersey Fc Porto </b></div>
                <div class="align text-caption"> Rp. 110.000,00 </div>
                <q-rating
                  class="q-mx-auto responsive"
                  v-model="ratingModel1"
                  size="1.5em"
                  color="indigo-10"
                  :max="5"
                  readonly
                />
            </div>
            <div id="padding" class="col-2 q-gutter-y-xs column">
              <q-img
                src="./statics/baju/inter.jpg"
              />
              <div class="align text-body2"><b> Jersey Inter Milan </b></div>
                <div class="align text-caption"> Rp. 190.000,00 </div>
                <q-rating
                  class="q-mx-auto responsive"
                  v-model="ratingModel"
                  size="1.5em"
                  color="indigo-10"
                  :max="5"
                  readonly
                />
            </div>
            <div id="padding" class="col-2 q-gutter-y-xs column">
              <q-img
                src="./statics/baju/lei.jpg"
              />
              <div class="align text-body2"><b> Jersey Leicester City </b></div>
                <div class="align text-caption"> Rp. 100.000,00 </div>
                <q-rating
                  class="q-mx-auto responsive"
                  v-model="ratingModel"
                  size="1.5em"
                  color="indigo-10"
                  :max="5"
                  readonly
                />
            </div>
            <div id="padding" class="col-2 q-gutter-y-xs column">
              <q-img
                src="./statics/baju/paris.jpg"
              />
              <div class="align text-body2"><b> Jersey Paris Saint Germain </b></div>
                <div class="align text-caption"> Rp. 170.000,00 </div>
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
          </q-card-section>
      </q-card>
           
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
                      <q-separator-vertical/>
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
                      <q-separator-vertical/>
                  </div>

                  <div class="col flex flex-center " @click="beli1()" >
                    Logout
                  </div>
                </div>
              </q-card-section> 
            </q-card >
            <!-- Akhir Footer -->
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
export default {
  data () {
    return {
      slide: 1,
      alert: false,
      batal(){
        alert = false
      },
      beli(){
        let self = this;
        self.$router.push("../transaksi/")
      },
       beli1(){
        let self = this;
        self.$router.push("../login/")
      }
    }
  }
}
</script>