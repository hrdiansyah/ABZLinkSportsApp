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
    
     <q-separator color="blue-grey-3" inset />
     <div class="column">
       <div class="column" style="height: 70px"/>
         <div class="row" style="height: 200px">
            <div class="col-1 q-gutter-xl"/>
            <div class="col-3">
              <div class="text-left text-overline">TENTANG KAMI</div>
              <div class="text-left text-caption">
              Kami merupakan Perusahaan yang bergerak dalam bidang sport, kami menjual berbagai macam kebutuhan olahraga seperti baju sport, sepatu sport maupun alat olahrga yang mayoritas yaitu olahraga sepakbola.</div>
            </div>
            <div class="col-2"/>
            <div class="col-2">
              <div class="text-left text-overline">Menu</div>
              <div class="text-left text-caption">AllProduk</div>
              <div class="text-left text-caption">About</div>
              <div class="text-left text-caption">Contact Us</div>
            </div>
            <div class="col-1"/>
            <div class="col-3 q-gutter-xs">
              <div class="text-left text-overline">ANDA INGIN KELUAR ?

              </div>
              <q-btn style="background: #283b39; color: white" label="LOGOUT" />
               
            </div>
         </div> 
         <div class="row" style="height: 100px">
          <div class="col-1 q-gutter-xl "/>
          <div class="col-10">
            <div class="column" style="100px">
              <div class="col-1">
                <div class="text-left text-overline">Kenali kami lebih baik dengan mengikuti pegangan media</div>
                <div class="text-left text-overline">sosial kami!</div>
              </div>
              <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
          <q-item-section avatar>
            <q-icon name="school" />
            </div> 
         </div>
        </div>

          <div class="column" style="240px">
            <div class="row">
              <div class="col-1 q-gutter-xl "/>
              <div class="col1">
                <div class="text-left text-overline">@TGProject</div>
              </div>
              <div class="col-10"/>
              <div class="col-auto justify-end">
                <q-img src="./statics/master.png" style="width:30px"/>
                <q-img src="./statics/visa.png" style="width:30px"/>
              </div>
            </div>
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