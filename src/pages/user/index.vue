<template>
 <div class="q-pa-md">
     <q-toolbar class="bg-purple text-white shadow-2 ">
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



      <q-toolbar class="bg-purple text-white shadow-2 ">
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

      <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
      <q-tabs v-model="tab" shrink>
        <q-tab name="tab1" label="Tab 1" /> 
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
      arrows
      navigation
      infinite
    >
    
      <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
    </q-carousel>


  
     <div class="row">

          <div id="padding" class="col-3  q-mt-md q-mx-auto text-center h1 q-mb-md" >Featured Brands
         
            <q-card class="my-card">
              <q-card-section>
                {{ lorem }}
              </q-card-section>
            </q-card>

            <q-card
              class="my-card text-white"
              style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
            >
      
          
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                <div class="absolute-bottom text-center q-pa-xs">Caption</div>
              </q-img>
         
            </q-card>
          </div>    

          <div id ="padding" class="col-3 q-mt-md q-mx-auto text-center h1 q-mb-md" >Featured Brands
         
            <q-card class="my-card">
              <q-card-section>
                {{ lorem }}
              </q-card-section>
            </q-card>

            <q-card
              class="my-card text-white"
              style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
            >
      
          
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                <div class="absolute-bottom text-center q-pa-xs">Caption</div>
              </q-img>
         
            </q-card>
          </div>  

          <div id="padding" class="col-3 q-mt-md q-mx-auto text-center h1 q-mb-md" >Featured Brands
         
            <q-card class="my-card">
              <q-card-section>
                {{ lorem }}
              </q-card-section>
            </q-card>

            <q-card
              class="my-card text-white"
              style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
            >
      
          
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                <div class="absolute-bottom text-center q-pa-xs">Caption</div>
              </q-img>
         
            </q-card>
          </div>  

          <div id="padding" class="col-3 q-mt-md q-mx-auto text-center h1 q-mb-md" >Featured Brands
         
            <q-card class="my-card">
              <q-card-section>
                {{ lorem }}
              </q-card-section>
            </q-card>

            <q-card
              class="my-card text-white"
              style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
            >
      
          
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                <div class="absolute-bottom text-center q-pa-xs">Caption</div>
              </q-img>
         
            </q-card>
          </div>  


      </div>
     <div class="row">

          <div id="padding" class="col-3  q-mt-md q-mx-auto text-center h1 q-mb-md" >Featured Brands
         
            <q-card class="my-card">
              <q-card-section>
                {{ lorem }}
              </q-card-section>
            </q-card>

            <q-card
              class="my-card text-white"
              style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
            >
      
          
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                <div class="absolute-bottom text-center q-pa-xs">Caption</div>
              </q-img>
         
            </q-card>
          </div>    

          <div id ="padding" class="col-3 q-mt-md q-mx-auto text-center h1 q-mb-md" >Featured Brands
         
            <q-card class="my-card">
              <q-card-section>
                {{ lorem }}
              </q-card-section>
            </q-card>

            <q-card
              class="my-card text-white"
              style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
            >
      
          
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                <div class="absolute-bottom text-center q-pa-xs">Caption</div>
              </q-img>
         
            </q-card>
          </div>  

          <div id="padding" class="col-3 q-mt-md q-mx-auto text-center h1 q-mb-md" >Featured Brands
         
            <q-card class="my-card">
              <q-card-section>
                {{ lorem }}
              </q-card-section>
            </q-card>

            <q-card
              class="my-card text-white"
              style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
            >
      
          
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                <div class="absolute-bottom text-center q-pa-xs">Caption</div>
              </q-img>
         
            </q-card>
          </div>  

          <div id="padding" class="col-3 q-mt-md q-mx-auto text-center h1 q-mb-md" >Featured Brands
         
            <q-card class="my-card">
              <q-card-section>
                {{ lorem }}
              </q-card-section>
            </q-card>

            <q-card
              class="my-card text-white"
              style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
            >
      
          
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                <div class="absolute-bottom text-center q-pa-xs">Caption</div>
              </q-img>
         
            </q-card>
          </div>  


      </div>

<div class="row">

          <div id="padding" class=" responsive col-3  q-mt-md q-mx-auto text-center h1 q-mb-md" >Featured Brands
         
            <q-card class="my-card">
              <q-card-section>
                {{ lorem }}
              </q-card-section>
            </q-card>

            <q-card
              class="my-card text-white"
              style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
            >
      
          
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                <div class="absolute-bottom text-center q-pa-xs">Caption</div>
              </q-img>
         
            </q-card>
          </div>    

          <div id ="padding" class="col-3 q-mt-md q-mx-auto text-center h1 q-mb-md" >Featured Brands
         
            <q-card class="my-card">
              <q-card-section>
                {{ lorem }}
              </q-card-section>
            </q-card>

            <q-card
              class="my-card text-white"
              style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
            >
      
          
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                <div class="absolute-bottom text-center q-pa-xs">Caption</div>
              </q-img>
         
            </q-card>
          </div>  

          <div id="padding" class="responsive col-3 q-mt-md q-mx-auto text-center h1 q-mb-md" >Featured Brands
         
            <q-card class="my-card">
              <q-card-section>
                {{ lorem }}
              </q-card-section>
            </q-card>

            <q-card
              class="my-card text-white"
              style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
            >
      
          
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                <div class="absolute-bottom text-center q-pa-xs">Caption</div>
              </q-img>
         
            </q-card>
          </div>  

          <div id="padding" class=" responsive col-3 q-mt-md q-mx-auto text-center h1 q-mb-md" >Featured Brands
         
            <q-card class="my-card">
              <q-card-section>
                {{ lorem }}
              </q-card-section>
            </q-card>

            <q-card
              class="my-card text-white"
              style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
            >
      
          
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                <div class="absolute-bottom text-center q-pa-xs">Caption</div>
              </q-img>
         
            </q-card>
          </div>  

      </div>

    
  </div>
 
  </template>



<style scoped>
  #padding {
    padding : 10px
  }
  #paddingtop{
    padding-bottom: 20px
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