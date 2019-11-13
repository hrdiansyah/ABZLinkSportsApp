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
        
        <q-btn color="blue" icon="add_box"  label="product" class="sp" size="md" @click="add()"/>
        
      </q-item-label>
        
        <q-item class="bg-indigo-13 col-0">
        <q-item-section avatar top>
          <q-item-label class="q-mt-sm">ID</q-item-label>
        </q-item-section>

        <q-item-section top class="col-3 gt-sm flex-center">
          <q-item-label class="q-mt-sm">Nama Diskon</q-item-label>
        </q-item-section>

        <q-item-section top class="col-3 gt-sm flex-center">
          <q-item-label class="q-mt-sm">Diskon
          </q-item-label>
        </q-item-section>

        <q-item-section top class="col-3 gt-sm flex-center">
          <q-item-label class="q-mt-sm">Nilai diskon
          </q-item-label>
        </q-item-section>

        <q-item-section top class="col-1 gt-sm flex-center"> 
          <q-item-label class="q-mt-sm">Action
          </q-item-label>
        </q-item-section>

      </q-item>
        
        <!-- Tabel -->
      <q-item class="bg-grey-2 col-3 text-black" v-for="(discount, index ) in pro" :key="discount.id">
        <q-item-section avatar top>
          <q-item-label class="q-mt-sm">{{index+1}}</q-item-label>
        </q-item-section>

        <q-item-section top class="col-3 gt-sm flex flex-center">
          <q-item-label class="q-mt-sm">{{discount.diskon}}</q-item-label>
        </q-item-section>

        <q-item-section top class="col-3 gt-sm flex flex-center">
          <q-item-label lines="1">
            <span class="text-weight-medium">{{discount.potongan}}</span>
          </q-item-label>
        </q-item-section>

        <q-item-section top class="col-3 gt-sm flex flex-center">
          <q-item-label lines="1">
            <span class="text-weight-medium">{{discount.nilai}}</span>
          </q-item-label>
        </q-item-section>

        <q-item-section top class="col-1 gt-sm flex-center">
          <q-item-label lines="1">
           
              <q-btn class="gt-xs" size="12px" flat dense round icon="edit" @click="edit(discount)"/>
              <q-btn class="gt-xs" size="12px" flat dense round icon="delete" @click="onDelete(discount.id)" />
              <q-btn size="12px" flat dense round icon="more_vert" />
            
          </q-item-label>
        </q-item-section>
      </q-item>

      <!-- pagination awal  -->
      <!-- <div class="bg-indigo-13 q-pa-lg flex flex-center">
        <q-pagination
            v-model="current"
            color="cyan"
            :max="5"
            :boundary-links="false"
          >
          </q-pagination>
      </div> -->
    <!-- pagination Akhir -->
      
    </q-list>
        </div>
            </div>
    <!-- Qlist akhir -->

   
  </div>
</template>

<script>
import {uploadKSSKdsc, uploaddsc}  from '../../api/uploaddsc/index';
import discounts from '../../api/Discount/index';
const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;

export default {
  data () {
    return {  
      current:1,
      updateSubmit: false,
      dialog : false,
      cancelEnabled: false,
      uploadedFiles: [],
      uploadError: null,
      currentStatus: null,
      uploadFieldName: 'photos',
      name : 'testing',
      string : 'string',
      nameFile : '',
      waitedFormData: '',
      filesImage: '',
      discountname: '',
      discountpotongan: '',
      discountnilai: '',
      imgurl: '',
       pro: [
        
      ],
    };
  },
    computed: {
      isInitial() {
        return this.currentStatus === STATUS_INITIAL;
      },
      isSaving() {
        return this.currentStatus === STATUS_SAVING;
      },
      isSuccess() {
        return this.currentStatus === STATUS_SUCCESS;
      },
      isFailed() {
        return this.currentStatus === STATUS_FAILED;
      },
      getImage() {
        uploaddsc.getAllImage(window, this.id).then(function (imagesdsc) {
          return imagesdsc.config.url;
        }).catch(function (err) {
          console.log(err)
        });
      }
    },
  // Get data dari Api
  // async mounted(){
  //   const response = await 
  //   discounts.getdiscount(window)
  //       {
  //         this.Pro=response
  //         console.log(Pro)
  //       }
  //  },

   beforeCreate() {
    let self=this
    discounts.getdiscount(window)
            .then(function (result) {
              console.log(result);
              self.pro= result
              })
              .catch(function (err) {
                  console.log(err);
              });
     },
    methods : {
    // Method untuk delete data By ID
    onDelete(id){
      if (confirm('Apakah anda yakin akan menghapus data ini ?')){
      discounts.deletediscount(window, id)
      .then((res)=>{
        discounts.getdiscount(window)
        .then((res)=>{
               this.Pro=res.data
               this.$router.go('/admin/discount')
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
      discounts.postdiscount(window, this.form.discountname, this.form.discountpotongan, this.form.discountnilai,
      this.form.discountname+'.png')
      .then(function(result)
        {
          $router.go('/admin/discount')
        })
      .catch(function(err){
        console.log(err);
      });
    },
    
    reset() {
        // reset form to initial state
        this.currentStatus = STATUS_INITIAL;
        this.uploadedFiles = [];
        this.uploadError = null;
        this.nameFile = ''
      },
    
    edit(discount) {
      if (confirm('Anda akan di alihkan ke halaman Edit data, Tekan OK untuk lanjut atau Batal untuk kembali')){
        try {
            this.dialog=true
            this.updateSubmit= true
            this.form.id=product.id
            this.form.discountname=product.diskon
            this.form.discountpotongan=product.potongan
            this.form.discountnilai=product.nilai
            this.form.url=product.imgurl
        } catch (error) {
            console.log(error.message)
        }
      }
    },
    
    update(id) {
      
        const self=this 
        products.putproduct(window, self.form.id, self.form.discountname, self.form.discountpotongan,
        self.form.discountnilai)
        .then(function(result) {
            self.$router.go('/admin/discount')
        })
        .catch(function(err) {
            console.log(err);
        }); 
      },
      save(formData) {
        // upload data to the server
        this.currentStatus = STATUS_SAVING;
        uploadKSSKdsc(formData)
          .then(x => {
            this.uploadedFiles = [].concat(x);
            this.currentStatus = STATUS_SUCCESS;
          })
          .catch(err => {
            this.uploadError = err.response;
            this.currentStatus = STATUS_FAILED;
          });

      },

      filesChange(fieldName, fileList) {
        
        // handle file changes
        const formData = new FormData();

        if (!fileList.length) return;

        // append the files to FormData
        Array
          .from(Array(fileList.length).keys())
          .map(x => {
            let newNameFile = this.nameFile + '.jpg'
            this.filesImage = newNameFile
            formData.append(fieldName, fileList[x], newNameFile);
          });

        // save it

        this.waitedFormData = formData
        
      },

      submit(waitedFormData) {
        
        this.save(waitedFormData);
        this.postdiscount();
      }
    },
    mounted() {
      this.reset();
    },
  };
</script>

