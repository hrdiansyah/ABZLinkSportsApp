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
          <q-btn @click="show()" flat>
              <q-img
                :src="cart.imgurl"
                style="width: 50px"
                />
          </q-btn>
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
           
              <q-btn class="gt-xs bg-red q-mr-sm" size="12px" flat dense  @click="edit(cart)">Bayar</q-btn>
              <q-btn class="gt-xs bg-green" size="12px" flat dense  @click="onDelete(cart.id)">Dellete</q-btn>
            
          </q-item-label>
        </q-item-section>
      </q-item>

    </q-list>
        </div>
            </div>
    <!-- Qlist akhir -->
    <!-- popup -->
      <q-dialog v-model="dialog">
        <q-card>
          <q-card-section>
          <div id="form" class="q-mx-auto" style="max-width: 600px">
            text
          </div>
          </q-card-section>
        </q-card>
      </q-dialog>
    <!-- popup -->
  </div>
</template>

<script>

import carts from '../../api/cart/index';
import product from '../../api/Produk/index';
import akuaja from '../../api/upload/index';
export default {
  data () {
    return {
      dialog:false,
      images:[],
      Pro: [],
      produk:[]
      
    }
  },



  beforeCreate() {
    let getIdCustomer= localStorage.getItem('id');
    let self=this;
    
    carts.getCartByCustomer(window, getIdCustomer )
        .then(function (result) {
          if(result){
              return self.Pro=result
              console.log(Pro)
              product.getproductbyId(window, result.id_product )
                        .then(function (res) {
                            self.produk= res;
                            console.log(res)
                        })
                        .catch(function (err) {
                            console.log(err);
                        });
          }
              
           
        })
        .catch(function (err) {
            console.log(err);
        });
  },

  // Get data dari Api
  // async mounted(){
  //   let getIdCustomer=localStorage.getItem('id');
  //   const response = await 
  //   carts.getCartByCustomer(window, getIdCustomer)
  //       {
  //         this.Pro=response
  //         console.log(response)
  //       }
  //  },
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
    show(){
      this.dialog=true

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

