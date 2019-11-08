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

      <q-card class="my-card q-my-sm">
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
  },
  methods :{
      logout(){
        localStorage.removeItem('role');
        localStorage.removeItem('email');
        this.$router.push('/login');
      }
    }
}
</script>