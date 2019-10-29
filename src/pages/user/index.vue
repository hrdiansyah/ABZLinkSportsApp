 <template>
 
 <div class="q-pa-md">
     <q-toolbar class="bg-purple text-white shadow-2 rounded-borders">
      <q-btn flat label="Homepage" />
      <q-space />

      <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
      <q-tabs v-model="tab" shrink>
        <q-tab name="tab1" label="Tab 1" />
        <q-tab name="tab2" label="Tab 2" />
        <q-tab name="tab3" label="Tab 3" />
      </q-tabs>
    </q-toolbar>



      <q-toolbar class="bg-purple text-white shadow-2 rounded-borders">
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
          <div class="col-12 col-md-8 q-mt-md q-mx-auto text-center h1" >Featured Brands
          
         <div class="column" style="height: 150px">
             <div class="col-4">
        
            <q-img
            src="https://placeimg.com/500/300/nature"
          
            style="width: 300px"
                /> 

            </div>
      </div>
      </div>
     
    
      
     </div>
  </div>
 </div>
 
  </template>
<style scoped>

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