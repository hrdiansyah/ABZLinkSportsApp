<template>
 <div class="q-pa-md">
     <q-toolbar class="bg-grey-10 text-white shadow-2 ">
      <q-btn flat label="Homepage" />
      <q-space />

      <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
      <!-- <q-tabs v-model="tab" shrink>
        <q-tab name="Product" label="Product" />
        <q-tab name="How" label="How To Use" />
        <q-tab name="Pricing" label="Pricing" />
      </q-tabs> -->
    </q-toolbar>



      <q-toolbar class="bg-grey-10 text-white shadow-2 ">
      <q-tabs v-model="tab" shrink>
        <q-tab name="tab1" label="About" />
        <q-tab name="tab2" label="Products" />
        <q-tab name="tab3" label="Men" />
        <q-tab name="tab4" label="Woman" />
        <q-tab name="tab4" label="Contact Us" />
      </q-tabs>
      <q-space />
      
      <q-input bottom-slots v-model="text" label="Type name of product" class="text-white" :dense="dense">
        <template v-slot:append>
          <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
          <q-icon name="search" />
        </template>

      </q-input>
      <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
      <q-tabs v-model="tab" shrink>
         <!-- <q-tab name="./statics/toolbar/gerigi.jpg" label="" /> -->
        <div class="q-pa-md q-gutter-sm">
        <q-btn label="Alert" color="primary" @click="alert" />
        <q-btn label="Confirm" color="primary" @click="confirm" />
        <q-btn label="Prompt" color="primary" @click="prompt" />
        </div>
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
      <q-card class="my-card">
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
              <div id="padding" class="col-2 q-gutter-y-xs column">
                <q-img
                  src="./statics/persija.jpg"
                />
                <div class="align text-body2"><b> Jersey Persija </b></div>
                <div class="align text-caption"> Rp. 120.000,00 </div>
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
                src="./statics/indonesia.jpg"
              />
                <div class="align text-body2"><b> Jersey Indonesia </b></div>
                <div class="align text-caption"> Rp. 150.000,00 </div>
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
                src="./statics/brazil.jpg"
              />
              <div class="align text-body2"><b> Jersey Brazil </b></div>
                <div class="align text-caption"> Rp. 130.000,00 </div>
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
                src="./statics/inter.jpg"
              />
              <div class="align text-body2"><b> Jersey Internazionale </b></div>
                <div class="align text-caption"> Rp. 90.000,00 </div>
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
                src="./statics/madrid.jpg"
              />
              <div class="align text-body2"><b> Jersey Real Madrid </b></div>
                <div class="align text-caption"> Rp. 150.000,00 </div>
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
                src="./statics/barcelona.jpg"
              />
              <div class="align text-body2"><b> Jersey Barcelona </b></div>
                <div class="align text-caption"> Rp. 150.000,00 </div>
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
                  src="./statics/persija.jpg"
                />
                <div class="align text-body2"><b> Jersey Persija </b></div>
                <div class="align text-caption"> Rp. 120.000,00 </div>
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
                src="./statics/indonesia.jpg"
              />
                <div class="align text-body2"><b> Jersey Indonesia </b></div>
                <div class="align text-caption"> Rp. 150.000,00 </div>
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
                src="./statics/brazil.jpg"
              />
              <div class="align text-body2"><b> Jersey Brazil </b></div>
                <div class="align text-caption"> Rp. 130.000,00 </div>
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
                src="./statics/inter.jpg"
              />
              <div class="align text-body2"><b> Jersey Internazionale </b></div>
                <div class="align text-caption"> Rp. 90.000,00 </div>
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
                src="./statics/madrid.jpg"
              />
              <div class="align text-body2"><b> Jersey Real Madrid </b></div>
                <div class="align text-caption"> Rp. 150.000,00 </div>
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
                src="./statics/barcelona.jpg"
              />
              <div class="align text-body2"><b> Jersey Barcelona </b></div>
                <div class="align text-caption"> Rp. 150.000,00 </div>
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

                  <div class="col flex flex-center"  >
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
      slide: 1
    }
  }
}
</script>