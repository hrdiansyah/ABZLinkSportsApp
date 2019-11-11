<template>
    <div class="q-pa-md q-gutter-md">
      <div class="row">
          <div class="col" style="align : center">
    <!-- Qlist awal -->
    <q-list 
      bordered class="rounded-borders q-mx-auto" 
      style="max-width: auto"
      >
      <q-item-label header>
        
        <q-btn color="blue" icon="add_box"  label="product" class="sp" size="md" to="/upload"/>
        
      </q-item-label>
        
        <q-item class="bg-indigo-13 col-0">
        <q-item-section avatar top>
          <q-item-label class="q-mt-sm">ID</q-item-label>
        </q-item-section>

        <q-item-section top class="col-3 gt-sm flex-center">
          <q-item-label class="q-mt-sm">Image</q-item-label>
        </q-item-section>

        <q-item-section top class="col-3 gt-sm flex-center">
          <q-item-label class="q-mt-sm">Id Product</q-item-label>
        </q-item-section>

        <q-item-section top class="col-3 gt-sm flex-center">
          <q-item-label class="q-mt-sm">Id Customer
          </q-item-label>
        </q-item-section>
      </q-item>
        
        <!-- Tabel -->
      <q-item class="bg-grey-2 col-2 text-black" v-for="(cart, index ) in Pro" :key="cart.id">
        <q-item-section avatar top>
          <q-item-label class="q-mt-sm col-0">{{index+1}}</q-item-label>
        </q-item-section>

        <q-item-section top class="col-3 gt-sm flex flex-center">
              <q-img
                :src="cart.imgurl"
                style="width: 30%"
                />
        </q-item-section>

         <q-item-section top class="col-3 gt-sm flex flex-center">
          <q-item-label class="q-mt-sm">{{cart.id_product}}</q-item-label>
        </q-item-section>

        <q-item-section top class="col-3 gt-sm flex flex-center">
          <q-item-label lines="1">
            <span class="text-weight-medium">{{cart.id_customer}}</span>
          </q-item-label>
        </q-item-section>

        

        <q-item-section top class="col-1 gt-sm flex flex-center">
          <q-item-label lines="1">
           
              <q-btn class="gt-xs" size="12px" flat dense round icon="edit" @click="edit(cart)"/>
              <q-btn class="gt-xs" size="12px" flat dense round icon="delete" @click="onDelete(cart.id)" />
              <q-btn size="12px" flat dense round icon="more_vert" />
            
          </q-item-label>
        </q-item-section>
      </q-item>

      <!-- pagination awal  -->
      <div class="bg-indigo-13 q-pa-lg flex flex-center">
        <q-pagination
            v-model="current"
            color="cyan"
            :max="5"
            :boundary-links="false"
          >
          </q-pagination>
      </div>
    <!-- pagination Akhir -->
      
    </q-list>
        </div>
            </div>
    <!-- Qlist akhir -->

    <!-- Form popup awal  -->
    <q-dialog v-model="dialog">
      <q-card>
        <q-card-section>
        <div id="form" class="q-mx-auto" style="max-width: 600px">
          <q-form
            @submit="onSubmit"
            class="q-gutter-md"
          >
            <q-input
              filled
              v-model="form.id"
              label="ID *"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />

            <q-input
              filled
              v-model="form.id_product"
              label="Id Produk *"
              lazy-rules
              :rules="[
                val => val !== null && val !== '' || 'Please enter your product price',
              ]"
            />
             <q-input
              filled
              v-model="form.id_customer"
              label="Id Customer *"
              lazy-rules
              :rules="[
                val => val !== null && val !== '' || 'Please enter your product price',
              ]"
            />
            <!-- <q-radio dense v-model="form.jenisKelamin" val="Laki-laki" label="Laki-laki" />
            <q-radio dense v-model="form.jenisKelamin" val="Perempuan" label="Perempuan" /> -->

            <div>
              <q-btn flat label="Add" type="submit" color="primary" v-close-popup v-show="!updateSubmit"/>
              <q-btn flat label="Update" type="button" color="primary" v-close-popup v-show="updateSubmit" @click="update(form)"/>
              <q-btn flat label="Cancel" color="primary" v-close-popup="cancelEnabled" @click="batal()" />
            
            </div>
            <!-- Button akhir -->

          </q-form>
        </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <!-- Form popup akhir  -->
  </div>
</template>

<script>

import carts from '../../api/cart/index';
import akuaja from '../../api/upload/index';
export default {
  data () {
    return {
      current:1,
      updateSubmit: false,
      dialog : false,
      cancelEnabled: false,
      images:[],
      Pro: [],
      form:{
        id : '',
        id_customer : '',
        id_product : '',
        imgurl:''
      }
    }
  },


  // Get data dari Api
  async mounted(){
    const response = await 
    carts.getCart(window)
        {
          this.Pro=response
        }
   },
    methods : {
    // Method untuk delete data By ID
    onDelete(id){
      if (confirm('Apakah anda yakin akan menghapus data ini ?')){
      carts.deleteCart(window, id)
      .then((res)=>{
        carts.getCart(window)
        .then((res)=>{
               this.Pro=res.data
               this.$router.go('/customer/cart')
           })
           .catch(()=>{
               alert('Error load data');
           })
        
      })
      .catch(()=>{
        alert('Error load data');
      })
      console.log("delete called");
      }
    },
    add(){
      this.dialog=true
      this.updateSubmit= false

    },
    
    // method untuk Tambah data
    onSubmit(){
      const self=this
      carts.postCart(window, self.form.id, self.form.id_customer, self.form.id_product, self.form.imgurl)
      .then(function(result)
        {
          self.$router.go('/customer/cart')
        })
      .catch(function(err){
        console.log(err);
      });
    },

    edit(cart){
      if (confirm('Anda akan di alihkan ke halaman Edit data, Tekan OK untuk lanjut atau Batal untuk kembali')){
        try {
            this.dialog=true
            this.updateSubmit= true
            this.form.id=cart.id
            this.form.id_customer=cart.id_customer
            this.form.imgurl= cart.imgurl
            this.form.harga=cart.id_customer
            

        } catch (error) {
            console.log(error.message)
        }
      }
    },
    batal()
    {
      this.dialog=false
    },
    update(id) {
      
        const self=this 
        products.putproduct(window, self.form.id, self.form.id_customer, self.form.id_product, self.form.imgurl)
        .then(function(result) {
            self.$router.go('/customer/cart')
        })
        .catch(function(err) {
            console.log(err);
        }); 
      }
    }
}
</script>

<style scoped>

</style>

