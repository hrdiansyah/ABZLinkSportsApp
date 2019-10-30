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
              <div id="padding" class="col-2  q-gutter-y-md column">
                <q-img
                  src="./statics/persija.jpg"
                />
                <q-rating
                  v-model="ratingModel"
                  size="2.0em"
                  color="indigo-10"
                  :max="5"
                  readonly
                />
                <div class="align" size="16"><h6> Jersey Bola </h6></div>
              </div>
            <div id="padding" class="col-2">
              <q-img
                src="./statics/indonesia.jpg"
              />
            </div>
            <div id="padding" class="col-2">
              <q-img
                src="./statics/brazil.jpg"
              />
            </div>
            <div id="padding" class="col-2">
              <q-img
                src="./statics/inter.jpg"
              />
            </div>
            <div id="padding" class="col-2">
              <q-img
                src="./statics/madrid.jpg"
              />
            </div>
            <div id="padding" class="col-2">
              <q-img
                src="./statics/indonesia.jpg"
              />
            </div>
          </div>
        </q-card-section>
      </q-card>
  </div>
</template>

<style scoped>
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
      slide: 'first',
      ratingModel: 5
      }
  }
}
</script>