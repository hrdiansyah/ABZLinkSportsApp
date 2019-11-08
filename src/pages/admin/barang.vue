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

        <q-item-section top class="col-2 gt-sm flex-center">
          <q-item-label class="q-mt-sm">Nama Produk</q-item-label>
        </q-item-section>

        <q-item-section top class="col-2 gt-sm flex-center">
          <q-item-label class="q-mt-sm">Harga Produk
          </q-item-label>
        </q-item-section>

        <q-item-section top class="col-2 gt-sm flex-center">
          <q-item-label class="q-mt-sm">Jumlah Produk
          </q-item-label>
        </q-item-section>

        <q-item-section top class="col-2 gt-sm flex-center">
          <q-item-label class="q-mt-sm">Produk kategori
          </q-item-label>
        </q-item-section>

        <q-item-section top class="col-2 gt-sm flex-center">
          <q-item-label class="q-mt-sm">Produk deskripsi
          </q-item-label>
        </q-item-section>

        <q-item-section top class="col-1 gt-sm flex-center"> 
          <q-item-label class="q-mt-sm">Action
          </q-item-label>
        </q-item-section>

      </q-item>
        
        <!-- Tabel -->
      <q-item class="bg-grey-2 col-2 text-black" v-for="(product, index ) in Pro" :key="product.id">
        <q-item-section avatar top>
          <q-item-label class="q-mt-sm col-0">{{index+1}}</q-item-label>
        </q-item-section>

        <q-item-section top class="gt-sm flex flex-center">
          <q-item-label class="q-mt-sm">{{product.product_name}}</q-item-label>
        </q-item-section>

        <q-item-section top class="col-2 gt-sm flex flex-center">
          <q-item-label lines="1">
            <span class="text-weight-medium">{{product.harga}}</span>
          </q-item-label>
        </q-item-section>

        <q-item-section top class="col-2 gt-sm flex flex-center">
          <q-item-label lines="1">
            <span class="text-weight-medium">{{product.kuantity}}</span>
          </q-item-label>
        </q-item-section>

        <q-item-section top class="col-2 gt-sm flex flex-center">
          <q-item-label lines="1">
            <span class="text-weight-medium">{{product.product_kategory}}</span>
          </q-item-label>
        </q-item-section>

        <q-item-section top class="col-2 gt-sm flex flex-center">
          <q-item-label lines="1">
            <span class="text-weight-medium">{{product.imgurl}}</span>
          </q-item-label>
        </q-item-section>
         <q-item-section top class="col-2 gt-sm flex flex-center">
          <q-item-label lines="1">
            <span class="text-weight-medium">{{product.imgurl}}</span>
          </q-item-label>
        </q-item-section>

        <q-item-section top class="col-1 gt-sm flex flex-center">
          <q-item-label lines="1">
           
              <q-btn class="gt-xs" size="12px" flat dense round icon="edit" @click="edit(product)"/>
              <q-btn class="gt-xs" size="12px" flat dense round icon="delete" @click="onDelete(product.id)" />
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
              v-model="form.productname"
              label="Nama Produk *"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />

            <q-input
              filled
              v-model="form.harga"
              label="Harga produk *"
              lazy-rules
              :rules="[
                val => val !== null && val !== '' || 'Please enter your product price',
              ]"
            />
            <!-- <q-radio dense v-model="form.jenisKelamin" val="Laki-laki" label="Laki-laki" />
            <q-radio dense v-model="form.jenisKelamin" val="Perempuan" label="Perempuan" /> -->

            <q-input
              filled
              v-model="form.kuantity"
              label="Jumlah barang "
              lazy-rules
              :rules="[
                val => val !== null && val !== '' || 'Please enter your product qty',
              ]"
            />
                <!-- <q-input filled v-model="form.tanggalProject" mask="date" :rules="['date']">
                <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                        <q-date v-model="form.tanggalProject" @input="() => $refs.qDateProxy.hide()" />
                    </q-popup-proxy>
                    </q-icon>
                </template>
                </q-input> -->
            
                <q-input
                  filled
                  v-model="form.productkategory"
                  label="Kategori produk "
                  lazy-rules
                  :rules="[
                    val => val !== null && val !== '' || 'Please enter product category',
                  ]"
                />

                <q-input
                  filled
                  v-model="form.url"
                  label="url "
                  type="textarea"
                  lazy-rules
                  :rules="[
                    val => val !== null && val !== '' || '',
                  ]"
                />

                <q-input
                  filled
                  v-model="form.imgurl"
                  label="Upload Ulang Gambar"
                  type="textarea"
                  lazy-rules
                  :rules="[
                    val => val !== null && val !== '' || '',
                  ]"
                />

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

import products from '../../api/Produk/index';
import akuaja from '../../api/upload/index';
export default {
  data () {
    return {
      current:1,
      updateSubmit: false,
      dialog : false,
      cancelEnabled: false,
      Pro: [
        { 

        }
      ],
        form:{
        productname : '',
        harga : '',
        kuantity : '',
        productkategory : ''
      }
    }
  },

  // Get data dari Api
  async mounted(){
    const response = await 
    products.getproduct(window)
        {
          this.Pro=response
        }
   },
    methods : {
    // Method untuk delete data By ID
    onDelete(id){
      if (confirm('Apakah anda yakin akan menghapus data ini ?')){
      products.deleteproduct(window, id)
      .then((res)=>{
        products.getproduct(window)
        .then((res)=>{
               this.Pro=res.data
               this.$router.go('/admin/barang')
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
      products.postproduct(window, self.form.productname, self.form.harga, self.form.kuantity, 
      self.form.productkategory, self.form.productdesc
    )
      .then(function(result)
        {
          self.$router.go('/admin/barang')
        })
      .catch(function(err){
        console.log(err);
      });
    },

    edit(product){
      if (confirm('Anda akan di alihkan ke halaman Edit data, Tekan OK untuk lanjut atau Batal untuk kembali')){
        try {
            this.dialog=true
            this.updateSubmit= true
            this.form.id=product.id
            this.form.productname=product.product_name
            this.form.harga=product.harga
            this.form.kuantity=product.kuantity
            this.form.productkategory=product.product_kategory

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
        products.putproduct(window, self.form.id, self.form.productname, self.form.harga,
        self.form.kuantity, self.form.productkategory, self.form.productdesc)
        .then(function(result) {
            self.$router.go('/admin/barang')
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

