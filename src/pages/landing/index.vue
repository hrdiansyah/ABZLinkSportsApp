<template>
 <div class="q-pa-md q-gutter-md">
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
          <div class="text-center text-subtitle2 text-white">
           <q-btn class="btn-fixed-width" outline style="color: black;" label="Login/Register Now" />
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

                  <div class="col flex flex-center " >
                    Logout
                  </div>
                </div>
              </q-card-section> 
            </q-card >
            <!-- Akhir Footer -->
        </div>
</template>

<style scoped>
  .size {
    height:20px;
    width: 60px;
  }
  .trans {
    opacity : 0.8;
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
      slide: 'first',
      ratingModel: 5,
      ratingModel1: 4
      }
  }
}
</script>